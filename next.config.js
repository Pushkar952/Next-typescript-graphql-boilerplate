const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins(
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === true,
      compress: true,
      images: {
        domains: ['lh3.googleusercontent.com'],
        formats: ['image/avif', 'image/webp'],
      },
      webpack(config) {
        const prod = process.env.NODE_ENV === 'production';
        const plugins = [...config.plugins];

        return {
          ...config,
          mode: prod ? 'production' : 'development',
          devtool: prod ? 'hidden-source-map' : 'eval-source-map',
          plugins,
        };
      },
    }),
  ],
  {},
);
