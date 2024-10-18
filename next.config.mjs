// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     transpilePackages: ['lucide-react'],
//     images: {
//       domains: ['res.cloudinary.com','i.ytimg.com','s3-alpha-sig.figma.com'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '**',
//       },
//     ],
//     },
//     reactStrictMode: true,
//     eslint: {
//         ignoreDuringBuilds: true,
//       },
// };

// export default nextConfig;


// // s3-alpha-sig.figma.com


/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        pathname: '**',
      },
    ],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
