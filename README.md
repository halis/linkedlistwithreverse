# linked list with reverse
A simple (singly) linked list with a reverse function.
No dependencies.

All operations, including reverse, have:  
**Time Complexity**: Θ(n) (linear time)  
**Space Complexity**: Θ(1) (constant space)  

## Example

```js
const { LinkedList } = require('./linkedlist')

try {
  const list = new LinkedList()

  list.add(1)
  list.add(2)
  list.add(3)
  list.add(4)

  list.print() // 1 -> 2 -> 3 -> 4 -> null

  console.log(list.length()) // 4

  list.reverse()

  list.print() // 4 -> 3 -> 2 -> 1 -> null

  list.remove(1)
  list.remove(4)
  list.remove(5)

  list.print() // 3 -> 2 -> null

  console.log(list.length()) // 2

  console.log('find 5:', list.find(5)) // find 5: null

  console.log('find 3:', list.find(3)) // find 3: Node { data: 3, next: Node { data: 2, next: null } }
} catch (e) {
  console.error(e)
}
```
