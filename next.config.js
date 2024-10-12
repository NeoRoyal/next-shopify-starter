const withPWA = require('next-pwa');

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Fertilizer',
    siteDescription: 'Get some Fertilizers!',
    siteKeywords: 'fertilizer, chemicals, ecofriendly',
    siteUrl: '',
    siteImagePreviewUrl: '/images/main.jpg',
    twitterHandle: ''
  },
  images: {
    domains: [''],
  },
})
