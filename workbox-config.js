// eslint-disable-next-line no-undef
module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    "**/*.{png,jpg,jpeg,ico,html,css,js,json}"
  ],
  swDest: "dist/service-worker.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst'
    },
    {
      urlPattern: /fonts\.googleapis\.com\//,
      handler: 'CacheFirst'
    },
    {
      urlPattern: /ajax\.googleapis\.com\//,
      handler: 'CacheFirst'
    },
    {
      urlPattern: /gstatic\.com\//,
      handler: 'CacheFirst'
    }
  ]
};