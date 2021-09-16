$(function() {
  function Router() {
    this.mode = 'hash';
    this.routes = [];
  }
  
  Router.prototype.start = function(router) {
    this.mode = router.mode;
    this.routes = router.routes;
    // 查找地址栏中的路由
    this.active(this.routes[0]);
  }

  Router.prototype.active = function(route) {
    $.ajax({
      method: 'GET',
      url: route.template,
      dataType: 'html',
      success: function(data, status, xhr) {
        console.log('status: ', status);
        $(route.el).html(data);
        loadScript(route);
        loadStyle(route);
      }
    });
  }
  
  window.$router = new Router();
});

function loadScript(route) {
  const script = document.createElement('script');
  script.src = route.script;
  script.type = 'text/javascript';
  document.body.appendChild(script);
}

function loadStyle(route) {
  const link = document.createElement('link');
  link.href = route.style;
  link.type = 'text/css';
  document.body.appendChild(link);
}