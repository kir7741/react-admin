const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/account',
    createProxyMiddleware({
      target: 'http://localhost:3080',
      changeOrigin: true,
    })
  );
};
