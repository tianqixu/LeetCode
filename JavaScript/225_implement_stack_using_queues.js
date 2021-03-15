class Stack {
    topValue = undefined
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }

    push(x) {
        this.queue1.push(x)
        this.topValue = x
    }

    pop() {
        while(this.queue1.length > 1) {
            this.topValue = this.queue1.shift()
            this.queue2.push(this.topValue)
        }
        const result = this.queue1.shift()
        this.queue1 = this.queue2
        this.queue2 = []
        return result
    }

    top() {
        return this.topValue
    }

    empty() {
        return this.queue1.length === 0
    }
}

const test = () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    const a = stack.top()
    stack.pop()
    const b = stack.empty()
    console.log(a, b)
}

test()