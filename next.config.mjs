/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.mstyenterprises.com',
            port: '',
            pathname: '/storage/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
