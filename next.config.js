const withPlugins = require('next-compose-plugins');
// const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextSettings = {
  exportTrailingSlash: true,
  exportPathMap: () => {
    return {
      '/': {page: '/'}
    };
  }
};

module.exports = withPlugins([withImages()]);
