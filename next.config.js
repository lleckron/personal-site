/** @type {import('next').NextConfig} */

const customNextConfig = require('./next.config');

const server = next({
  dev: isDev,
  conf: customNextConfig,
})

module.exports = {
    // ...other Next.js config options...
  
    webpack(config, { isServer }) {
        const prefix = config.assetPrefix ?? config.basePath ?? '';
        config.module.rules.push({
          test: /\.mp4$/, 
          use: [{
            loader: 'file-loader',
            options: {
              publicPath: `${prefix}/_next/static/media/`,
              outputPath: `${isServer ? '../' : ''}static/media/`,
              name: '[name].[hash].[ext]',
            },
          }],
        });
    
        return config;
    }
  };
