function Stack() {
  this.store = [];
}

Stack.prototype.push = function(val) {
  this.store.push(val);
}

Stack.prototype.pop = function() {
  if (this.empty) {
    return null;
  } else {
    return this.store.pop();
  }
}

Stack.prototype.top = function() {
  if (this.empty) {
    return null;
  } else {
    this.store[this.store.length - 1];
  }
}

Stack.prototype.empty = function() {
  return this.store.length > 0;
}

Stack.prototype.size = function() {
  return this.store.length;
}

export default Stack;