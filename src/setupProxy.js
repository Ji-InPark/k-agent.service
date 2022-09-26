const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://militarychecker.eba-wqfc8fed.ap-northeast-2.elasticbeanstalk.com',
      changeOrigin: true,
    }),
  );
};
