import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
});
