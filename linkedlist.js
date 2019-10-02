
class Node {
  constructor(any) {
    this.data = any
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  add(any) {
    const newNode = new Node(any)
    if (!this.head) {
      this.head = newNode
    } else {
      let curr = this.head
      while (curr) {
        if (!curr.next) {
          break
        }
        curr = curr.next
      }
      curr.next = newNode
    }
  }

  remove(any) {
    let curr = this.head
    let prev = null
    while (curr) {
      if (curr.data === any) {
        if (prev === null) {
          this.head = curr.next || null
          return curr
        } else {
          prev.next = curr.next
          return curr
        }
      }
      prev = curr
      curr = curr.next
    }
    return null
  }

  find(any) {
    let curr = this.head
    while (curr) {
      if (curr.data === any) {
        return curr
      }
      curr = curr.next
    }
    return null
  }

  reverse() {
    let prev = null
    let curr = this.head
    let next = curr ? curr.next : null

    while (curr) {
      this.head = curr

      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
  }

  print() {
    let curr = this.head
    while (curr) {
      if (curr === this.head) {
        process.stdout.write(curr.data.toString())
      } else {
        process.stdout.write(` -> ${curr.data}`)
      }
      curr = curr.next
    }
    process.stdout.write(' -> null')
    process.stdout.write('\n')
  }
}

module.exports = {
  LinkedList,
  Node,
}
