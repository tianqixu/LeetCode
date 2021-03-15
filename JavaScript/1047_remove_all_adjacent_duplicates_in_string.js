let removeDuplicates = (S) => {
    const stack = []
    for (s of S) {
        s === stack[stack.length - 1] ? stack.pop() : stack.push(s)
    }
    return stack.join('')
}

const test = () => {
    const res = removeDuplicates("abbaca")
    console.log(res)
}

test()