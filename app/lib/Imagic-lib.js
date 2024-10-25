export function findNearestStandardImageRatio(width, height) {
  const standardRatios = ['16/9', '4/3', '3/2', '16/10', '9/16', '3/4', '2/3', '3/5'];
  const targetRatio = width / height;

  // Use reduce to find the closest ratio
  return standardRatios.map(ratio => ratio.split('/').map(Number))
      .reduce((closest, [currentW, currentH]) => {
          const currentRatio = currentW / currentH;
          const currentDifference = Math.abs(targetRatio - currentRatio);
          const closestDifference = Math.abs(targetRatio - (closest[0] / closest[1]));

          return currentDifference < closestDifference ? [currentW, currentH] : closest;
      }, standardRatios[0].split('/').map(Number)) // Initialize with the first parsed ratio
      .join('/'); // Convert the result back to string format
}

export async function getImageData(url) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const view = new DataView(buffer);
  let width = 0;
  let height = 0;

  if (view.getUint32(0) === 0x89504e47) {
      width = view.getUint32(16);
      height = view.getUint32(20);
  } else if (view.getUint16(0) === 0xffd8) {
      let offset = 2;
      while (offset < view.byteLength) {
          const marker = view.getUint16(offset, false);
          offset += 2;
          if (marker === 0xffc0 || marker === 0xffc2) {
              height = view.getUint16(offset + 3, false);
              width = view.getUint16(offset + 5, false);
              break;
          } else {
              offset += view.getUint16(offset, false);
          }
      }
  } else {
      throw new Error('Unsupported image format');
  }

  const aspectRatio = findNearestStandardImageRatio(width, height);
  const orientation = width > height ? 'landscape' : (height > width ? 'portrait' : 'square');

  return { url, width, height, aspectRatio, orientation };
}

// Helper function to adjust aspect ratios for pairs of images
export function adjustAspectRatios(images) {
  for (let i = 0; i < images.length; i += 2) {
      if (i + 1 < images.length) {
          const [width, height] = images[i].aspectRatio.split('/').map(Number);
          const nearestRatio = findNearestStandardImageRatio(width, height);
          
          images[i].aspectRatio = nearestRatio;
          images[i + 1].aspectRatio = nearestRatio;
      }
  }
  return images;
}

// Function to sort and modify the images array
export function sortImagesByPairs(images) {
  const landscapes = [];
  const portraits = [];

  // Split the images by orientation
  images.forEach(img => {
      if (img.orientation === 'landscape') landscapes.push(img);
      else portraits.push(img);
  });

  // Adjust aspect ratios for both landscapes and portraits
  const adjustedLandscapes = adjustAspectRatios(landscapes);
  const adjustedPortraits = adjustAspectRatios(portraits);

  // Interleave landscapes and portraits in pairs
  const result = [];
  let i = 0, j = 0;
  while (i < adjustedLandscapes.length || j < adjustedPortraits.length) {
      if (i < adjustedLandscapes.length) {
          result.push(adjustedLandscapes[i++]);
          if (i < adjustedLandscapes.length) result.push(adjustedLandscapes[i++]);
      }
      if (j < adjustedPortraits.length) {
          result.push(adjustedPortraits[j++]);
          if (j < adjustedPortraits.length) result.push(adjustedPortraits[j++]);
      }
  }

  return result;
}