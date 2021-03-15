const removeOuterParentheses = (S) => {
    if (!S) {
        return S
    }
    let parenthesesCount = 0
    let result = ''
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === '(') {
            parenthesesCount++
            if (parenthesesCount !== 1) {
                result += S.charAt(i)
            }
        } else {
            parenthesesCount--
            if (parenthesesCount !== 0) {
                result += S.charAt(i)
            }
        }
    }
    return result
}

const test = () => {
    const res = removeOuterParentheses("(()())(())")
    console.log(res)
}

test()