/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    images: { domains: ['s3-alpha-sig.figma.com'], },
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;


// s3-alpha-sig.figma.com