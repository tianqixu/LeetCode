class Queue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    push(x) {
        this.stack1.push(x)
    }

    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length - 1]
    }

    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0
    }
}

const test = () => {
    const queue = new Queue()
    queue.push(1)
    queue.push(2)
    const a = queue.peek()
    queue.pop()
    const b = queue.empty()
    console.log(a, b)
}

test()