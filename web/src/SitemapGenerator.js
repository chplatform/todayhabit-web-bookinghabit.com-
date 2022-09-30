require('babel-register')({
  presets: ['es2015', 'react'],
});
require.extensions['.css'] = () => {};

const router = require('./SitemapRouter').default;
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  return new Sitemap(router).build('https://www.bookinghabit.com/').save('./public/sitemap.xml');
}

generateSitemap();
