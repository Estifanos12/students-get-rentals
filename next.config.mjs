import withNextra from "nextra";


const nextra = withNextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
        serverActions: {
            bodySizeLimit: "4mb",
        }
    }
};

export default nextra(nextConfig);
