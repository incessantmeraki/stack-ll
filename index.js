// Abstraction of node

function Stacknode() {
  this.value = null
  this.next = null
}

Stacknode.prototype.setVal = function (val) {
  if (!val) return
  this.value = val
}

Stacknode.prototype.link = function (node) {
  if (!node) return null
  this.next = node
}

//Abstraction of Stack

function Stack() {
  this._top = null //stacknode type
  this.length = 0
}

Stack.prototype.isEmpty = function () {
  return this._top === null
}

Stack.prototype.push = function ( s ) {
  var newNode = new Stacknode()
  newNode.setVal(s)
  newNode.link(this._top)
  this._top = newNode
  this.length = this.length + 1
}

Stack.prototype.pop = function () {
  if (this._top === null) {
    console.log("pop called on empty stack")
    return
  }
  var old_top = this._top 
  this._top = this._top.next  
  this.length = this.length - 1
  return old_top.value
}


Stack.prototype.forEach = function (fn) {
  var val = this._top
  for (val; val !== null; val = val.next) {
    fn(val.value)
  }
}

Stack.prototype.clearAll = function () { 
  this._top = null
}

module.exports = Stack

