
function StateMachine(opts) {
  this.init = opts.init; // 初始状态
  this.transitions = opts.transitions; // 变化的种类
  const {data, methods} = opts;
  mixin(StateMachine, opts.data);
  mixin(StateMachine, opts.methods);
}

StateMachine.prototype.factory = function (opts) {

}

StateMachine.prototype.observe = function (opts) {

}

function mixin(target, source) {
  if (typeof source === 'Function') {
    const value= source();
    Object.keys(value).forEach(key => {
      target[key] = value[key];
    })
  } else if (typeof source === 'Object') {
    Object.keys(source).forEach(key => {
      target[key] = source[key];
    })
  }

}

export default StateMachine;
