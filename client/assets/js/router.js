

$(function() {
  function Router() {
    this.mode = 'hash';
    this.routes = [];
    this.history = [];
    this.errors = [
      {
        el: '#app',
        name: '404',
        path: '/404',
        component: 'pages/404/index.html',
        script: 'pages/404/index.js',
        style: 'pages/404/index.css',
      }
    ];
  }
  
  Router.prototype.start = function(router) {
    this.mode = router.mode;
    this.routes = router.routes;
    this.push(this.routes[0]);
  }
  
  Router.prototype.push = function(route) {
    route = this.match(route);
    this.history.push(route);
    this.load(route);
  }
  
  Router.prototype.pop = function() {
    const route = this.history.pop();
    this.load(route);
  }
  
  Router.prototype.load = function(route) {
    $.ajax({
      url: route.component,
      method: 'GET',
      dataType: 'html'
    }).then(function(data, status, xhr) {
      $(route.el).html(data);
      loadStyle(route);
      loadScript(route);
    });
  }

  Router.prototype.match = function(route) {
    if (Object.prototype.hasOwnProperty.call(route, 'name')) {
      const target = this.routes.find(elem => elem.name === route.name);
      if (target) {
        return target;
      } else {
        return this.errors[0];
      }
    }
    if (Object.prototype.hasOwnProperty.call(route, 'path')) {
      const target = this.routes.find(elem => elem.path === route.path);
      if (target) {
        return target;
      } else {
        return this.errors[0];
      }
    }
    return this.errors[0];
  }

  window.$router = new Router();
});

function loadScript(route) {
  const script = document.createElement('script');
  script.src = route.script;
  script.type = 'text/javascript';
  document.head.appendChild(script);
}

function loadStyle(route) {
  const link = document.createElement('link');
  link.href = route.style;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}