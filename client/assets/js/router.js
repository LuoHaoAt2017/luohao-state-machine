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
    window.onhashchange = () => {
      this.hash();
    }
    window.onload = () => {
      this.hash();
    }
    window.location.hash = '#/';
  }
  
  Router.prototype.push = function(param) {
    let hash = '';
    if (param && param.params) {
      Object.keys(param.params).forEach(function(key) {
        hash += key + '=' + param.params[key] + '&';
      });
    }
    const route = this.match(param);
    if (hash) {
      hash = route.path + '?' + hash.substring(0, hash.length - 1);
    } else {
      hash = route.path;
    }
    window.location.hash = hash;
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

  Router.prototype.hash = function() {
    // http://localhost/index.html/#/home?x=123&y=456;
    const hash = window.location.hash;
    let path;
    const pIndex = hash.indexOf('#');
    const qIndex = hash.indexOf('?');
    if (qIndex === -1) {
      path = hash.substring(pIndex + 1, hash.length);
    } else {
      path = hash.substring(pIndex + 1, qIndex);
    }
    const route = this.match(path);
    this.history.push(route);
    this.load(route);
  }

  Router.prototype.match = function(route) {
    if (typeof route === "string") {
      const target = this.routes.find(elem => elem.path === route);
      if (target) {
        if (Object.prototype.hasOwnProperty.call(target, 'redirect')) {
          return this.routes.find(elem => elem.path === target.redirect);
        } else {
          return target;
        }
      } else {
        return this.errors[0];
      }
    }
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