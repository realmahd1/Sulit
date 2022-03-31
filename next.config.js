const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    reactStrictMode: true,
    distDir: 'build',
    pwa: {
    dest: 'public',
    runtimeCaching,
    },
})