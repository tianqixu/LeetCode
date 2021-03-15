const buildArray = (target, n) => {
    const res = []
    let count = 1
    for (t of target) {
        while (t !== count) {
            res.push('Push')
            res.push('Pop')
            count++
        }
        
        res.push('Push')
        count++
    }

    return res
}

const test = () => {
    const res = buildArray([1, 3, 5], 7)
    console.log(res)
}

test()