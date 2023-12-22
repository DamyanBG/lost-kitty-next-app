/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dymboto.chickenkiller.com"
            }
        ]
    }
}

module.exports = nextConfig
