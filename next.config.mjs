/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    images: { domains: ['s3-alpha-sig.figma.com'], },
    eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
