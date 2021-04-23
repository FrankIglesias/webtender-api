const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = createProxyMiddleware({
  target: 'https://maps.googleapis.com',
  changeOrigin: true,
  pathRewrite: (_, req) => `/maps/api/place/photo?photoreference=${req.query.photo_reference}&maxwidth=400&key=${process.env.NODE_MAPS_SEARCH_API}`,
});
