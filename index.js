// Abstraction of node

function Stacknode() {
  this.value = null 
  this.next = null //stacknode type
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
  this.top = null //stacknode type
}

Stack.prototype.isEmpty = function () {
  return this.top === null
}

Stack.prototype.push = function ( s ) {
  var newNode = new Stacknode()
  newNode.setVal(s)
  newNode.link(this.top)
  this.top = newNode
}
Stack.prototype.pop = function () {
  if (!this.top) {
    console.log("pop called on empty stack")
    return
  }
  var oldtop = this.top 
  this.top = this.top.next  
  return oldtop.value
  
}

Stack.prototype.display = function() {
  var val = this.top
  for ( val; val !== null; val = val.next) {
    console.log(val.value)
  }
}

Stack.prototype.forEach = function (fn) {
  var val = this.top
  for (val; val !== null; val = val.next) {
    fn(val.value)
  }
}

module.exports = Stack

