class MinStack {
    constructor() {
        this.stackData = []
        this.stackMin = []
    }

    push(element) {
        const length = this.stackMin.length
        this.stackData.push(element)
        length === 0 ? this.stackMin.push(element) : this.stackMin.push(element <= this.stackMin[length - 1] ? element : this.stackMin[length - 1])
    }

    pop() {
        this.stackData.pop()
        this.stackMin.pop()
    }

    top() {
        return this.stackData[this.stackData.length - 1]
    }

    getMin() {
        return this.stackMin[this.stackMin.length - 1]
    }
}

const test = () => {
    const minStack = new MinStack()
    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)
    const a = minStack.getMin()
    minStack.pop()
    const b = minStack.top()
    const c = minStack.getMin()
    console.log(a, b, c)
}

test()