import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
  readingTime: true,
});

export default withNextra({
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir: "dist",
});
