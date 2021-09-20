export default function Queue() {
  this.store = [];
}

Queue.prototype.enqueue = function(elem) {
  this.store.push(elem);
}

Queue.prototype.dequeue = function() {
  if (this.isEmpty()) {
    return null;
  }
  return this.store.shift();
}

Queue.prototype.isEmpty = function() {
  return this.store.length === 0;
}