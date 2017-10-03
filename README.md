# stack
simple last-in-first-out(LIFO) data structure

[![Build Status](https://travis-ci.org/incessantmeraki/stack-ll.svg?branch=master)](https://travis-ci.org/incessantmeraki/stack-ll)

## Usage

### Example

```js
  var Stack = require('stack-ll')
  var s = new Stack()
  s.push('hello')
  s.push('world')
  console.log(s.pop())
  console.log(s.pop())
```

### API

#### `stack = new Stack()`
Creates a new stack object 

#### `stack.push(val)`
pushes val into stack object

#### `stack.pop()`
removes top of stack element and return its value

#### `stack.length`
returns length of the stack 

#### `stack.forEach(callback(val))`
Iterate over each value of stack using callback 

## License

MIT
