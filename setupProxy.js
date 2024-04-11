import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app) {
  app.use(
    'https://hakimlivs-23.onrender.com',
    createProxyMiddleware({
      target: 'http://localhost:3000', 
      changeOrigin: true,
    })
  );
}
