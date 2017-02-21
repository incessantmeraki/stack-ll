# stack
simple last-in-first-out(LIFO) data structure
## Usage

### Example

```js
  var Stack = require('./index.js')
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

## License

MIT
