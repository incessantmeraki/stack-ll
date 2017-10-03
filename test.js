var tape = require('tape')
var Stack = require('./index.js')

var s = new Stack()

tape('basic operations', function (t) {
  var s = new Stack()

  s.push('First')
  s.push('Second')
  t.equal(s.length, 2)

  t.equal(s.pop(), 'Second')
  t.equal(s.pop(), 'First')
  t.equal(s.length, 0)
  t.end()
})



