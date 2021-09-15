const router = {
  mode: 'hash',
  routes: [
    {
      name: 'home',
      path: '/home',
      component: 'pages/home/index.html',
      style: 'pages/home/index.css',
      script: 'pages/home/index.js',
      el: '#app'
    },
    {
      name: 'about',
      path: '/about',
      component: 'pages/about/index.html',
      style: 'pages/about/index.css',
      script: 'pages/about/index.js',
      el: '#app'
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
}

export default router;