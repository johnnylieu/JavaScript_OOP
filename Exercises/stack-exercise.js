// create Stack constructor:
//     it has one method which is `count` - returns the number of elements in stack.
// Stack’s prototype has 3 methods:
//     peek - returns element at the top of the stack but does not remove it.
//         if nothing in stack to peek, return error `Error: Stack is empty.`
//     pop - removes element that is on top of the stack.
//         if nothing in stack to pop, return error `Error: Stack is empty.`
//     push - adds element to the top of the stack.

const _items = new WeakMap();

class Stack {
     constructor() {
          _items.set(this, []);
     }

     push(item) {
          _items.get(this).push(item);
     }

     pop() {
          const items = _items.get(this);
          const lengthOfStack = items.length;

          if (lengthOfStack === 0) {
               throw new Error(`Stack is empty.`);
          } else {
               return _items.get(this).pop();
          }
     }

     peek() {
          const items = _items.get(this);
          const lengthOfStack = items.length;
          const lastElement = items[lengthOfStack - 1];

          if (lengthOfStack === 0) {
               throw new Error(`Stack is empty.`);
          } else {
               return `${lastElement}`;
          }
     }

     get count() {
          return _items.get(this).length;
     }
}

c = new Stack();
c.push("a");
c.push("b");
c.push("c");
