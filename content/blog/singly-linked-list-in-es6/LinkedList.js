import ListElement from './ListElement.js'

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        const node = new ListElement(value)
        if (!this.head) {
            this.head = node
            this.tail = this.head
            this.length = 1
        } else {
            this.tail.next = node
            this.tail = node
            this.length++
        }

        return this
    }

    traverse(current = this.head) {
        if (!current.next) return
        if (current.value) return current.value
        return this.traverse(current.next)
    }
}

const list = new LinkedList()
list.push(20)
list.push(23)
list.push(42)

list.traverse()
