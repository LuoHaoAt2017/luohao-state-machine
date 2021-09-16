const router = {
  mode: 'hash',
  routes: [
    {
      el: '#app',
      path: '/home',
      template: 'pages/home/index.html',
      script: 'pages/home/index.js',
      style: 'pages/home/index.css'
    },
    {
      el: '#app',
      path: '/about',
      template: 'pages/about/index.html',
      script: 'pages/about/index.js',
      style: 'pages/about/index.css'
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
}

export default router;