var Stack = require('./index.js')

var s = new Stack()

s.push('First')
s.push('Second')

console.log('After pushing')
s.display()
/*
Second
First
*/
console.log()

console.log('Let\`s pop')
var pv = s.pop()
console.log('Popped value is', pv)
console.log()

console.log('After popping')
s.display()


