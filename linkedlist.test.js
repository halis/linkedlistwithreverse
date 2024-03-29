const { LinkedList } = require('./linkedlist')

try {
  const list = new LinkedList()

  list.add(1)
  list.add(2)
  list.add(3)
  list.add(4)
  list.print()
  console.log('length', list.length())
  // 1 -> 2 -> 3 -> 4 -> null

  list.reverse()
  list.print()
  // 4 -> 3 -> 2 -> 1 -> null

  list.remove(1)
  list.remove(4)
  list.remove(5)
  list.print()
  console.log('length', list.length())
  // 3 -> 2 -> null

  console.log('find 5:', list.find(5))
  // find 5: null

  console.log('find 3:', list.find(3))
  // find 3: Node { data: 3, next: Node { data: 2, next: null } }
} catch (e) {
  console.error(e)
}