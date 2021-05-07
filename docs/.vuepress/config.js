// .vuepress/config.js
module.exports = {
  title: "编程学院 - ChangeLogs",
  head: [
    ['link', { rel: 'icon', href: `http://programschool.com/assets/images/logo.svg` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  themeConfig: {
    search: false,
    displayAllHeaders: true,
    searchMaxSuggestions: 10,
    logo: 'http://programschool.com/assets/images/logo.svg',
    nav: [
      { text: '编程学院', link: 'https://programschool.com/' }
    ],
    sidebar: [
      ['/', '首页'],
      ['/add-jupyter-mode', '增加阅读模式（jupyter模式）'],
    ]
  }
}
