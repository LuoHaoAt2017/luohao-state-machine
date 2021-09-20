function Stack() {
  this.store = [];
}

Stack.prototype.push = function(val) {
  this.store.push(val);
}

Stack.prototype.pop = function() {
  if (!this.empty()) {
    return this.store.pop();
  }
  return null;
}

Stack.prototype.top = function() {
  if (!this.empty()) {
    return this.store[this.store.length - 1];
  }
  return null;
}

Stack.prototype.empty = function() {
  return this.store.length === 0;
}

Stack.prototype.size = function() {
  return this.store.length;
}

export default Stack;