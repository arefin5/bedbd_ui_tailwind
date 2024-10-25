import Image from 'next/image';
import DetailImageGalleryHeader from './DetailImageGalleryHeader';
import {  getImageData, adjustAspectRatios, sortImagesByPairs } from '@/app/lib/Imagic-lib';
import FullViewImage from './FullViewImage';
// const standardRatios = {
//     landscape: ['16:9', '4:3', '3:2', '16:10'],
//     portrait: ['9:16', '3:4', '2:3', '3:5'],
//   };

//   function findNearestStandardImageRatio(width, height) {
//     const standardRatios = ['16/9', '4/3', '3/2', '16/10', '9/16', '3/4', '2/3', '3/5'];

//     const targetRatio = width / height;
//     const parsedRatios = standardRatios.map(ratio => ratio.split('/').map(Number));

//     // Use reduce to find the closest ratio
//     return parsedRatios.reduce((accumulator, [currentW, currentH]) => {
//         const accW = accumulator[0];
//         const accH = accumulator[1];
        
//         const accRatio = accW / accH;
//         const accRatioDifference = Math.abs(targetRatio - accRatio);
//         const currentValueDifference = Math.abs(targetRatio - (currentW / currentH));

//         // Return the closest ratio
//         return accRatioDifference < currentValueDifference ? accumulator : [currentW, currentH];
//     }, parsedRatios[0]) // Initialize with the first parsed ratio directly as an array
//     .join('/'); // Convert the result back to string format
// }
  
// async function getImageData(url) {
//     const response = await fetch(url); // Fetch the image from the URL
//     const buffer = await response.arrayBuffer(); // Convert to buffer
//     const view = new DataView(buffer);
//     let width = 0;
//     let height = 0;
  
//     if (view.getUint32(0) === 0x89504e47) {
//       width = view.getUint32(16);
//       height = view.getUint32(20);
//     } 
//     // Check if the image is a JPEG (0xFF D8 FF)
//     else if (view.getUint16(0) === 0xffd8) {
//       let offset = 2;
//       while (offset < view.byteLength) {
//         const marker = view.getUint16(offset, false);
//         offset += 2;
//         if (marker === 0xffc0 || marker === 0xffc2) {
//           height = view.getUint16(offset + 3, false);
//           width = view.getUint16(offset + 5, false);
  
          
//           break;
//         } else {
//           offset += view.getUint16(offset, false);
//         }
//       }
//     } else {
//       throw new Error('Unsupported image format');
//     }

//         const aspectRatio = findNearestStandardImageRatio(width, height)
//         const orientation = width > height 
//                               ? 'landscape' 
//                               : (height > width)
//                                   ? 'portrait'
//                                   : 'square'
  
//     return { url, width, height, aspectRatio, orientation };
//   }

// // Function to sort and modify the images array
// function sortImagesByPairs(images) {
//   const landscapes = [];
//   const portraits = [];

//   // Split the images by orientation
//   images.forEach(img => {
//     if (img.orientation === 'landscape') landscapes.push(img);
//     else portraits.push(img);
//   });

//   // Helper function to adjust aspect ratios for pairs
//   function adjustAspectRatios(images) {
//     for (let i = 0; i < images.length; i += 2) {
//       if (i + 1 < images.length) {
//         const [width, height] = images[i].aspectRatio.split(':').map(Number);
//         const nearestRatio = findNearestStandardImageRatio(width, height);
        
//         images[i].aspectRatio = nearestRatio;
//         images[i + 1].aspectRatio = nearestRatio;
//       }
//     }
//     return images;
//   }

//   // Adjust aspect ratios for both landscapes and portraits
//   const adjustedLandscapes = adjustAspectRatios(landscapes);
//   const adjustedPortraits = adjustAspectRatios(portraits);

//   // Interleave landscapes and portraits in pairs
//   const result = [];
//   let i = 0, j = 0;
//   while (i < adjustedLandscapes.length || j < adjustedPortraits.length) {
//     if (i < adjustedLandscapes.length) {
//       result.push(adjustedLandscapes[i++]);
//       if (i < adjustedLandscapes.length) result.push(adjustedLandscapes[i++]);
//     }
//     if (j < adjustedPortraits.length) {
//       result.push(adjustedPortraits[j++]);
//       if (j < adjustedPortraits.length) result.push(adjustedPortraits[j++]);
//     }
//   }

//   return result;
// }

export default async function ImagesDetailsGallery({data}) {
    const imagesWithDimensions = await Promise.all(
        data.map((img) => getImageData(img.url))
      );

  return (
        <div className="absolute w-full min-h-max pb-auto top-20 left-0 z-50 bg-white z-90 pb-[720px] hidden">
            <DetailImageGalleryHeader/>
            <div className=" container mx-auto h-full">
                    <div className='flex flex-wrap gap-10 h-full px-3 '>
                      {   
                        sortImagesByPairs(imagesWithDimensions)
                          .map((img, idx)=> ( <div style={{ maxWidth:img['width'] }}
                                                  key={idx} className={` aspect-[${img['aspectRatio']}] w-[calc(100%-20px)] lg:w-[calc(50%-20px)] mx-auto relative w-full h-auto  rounded-lg overflow-hidden  object-contain `}> 
                                                  <Image  style={{ aspectRatio:img['aspectRatio']}} alt="..." src={img['url']} fill/>
                                              </div>))
                      }
                    </div>                
            </div>
            {/* Full width Image */}
            {/* <div className='w-full relative'>
              <div className=" flex container gap-4 mx-auto h-full p-6 md:p-10 lg:p-20 ">
                {
                  sortImagesByPairs(imagesWithDimensions)
                    .map((image, idx)=><FullViewImage key={idx} data={image} index={idx}/>)
                }
              </div>
            </div> */}
            
        </div>   
      )
}
