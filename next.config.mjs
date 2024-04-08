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
        missingSuspenseWithCSRBailout: false
    }
};

export default nextra(nextConfig);
