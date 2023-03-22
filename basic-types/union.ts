function combine (input1: number | string, input2: number | string) {
    let result: number | string
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combineAges = combine(20, 36)
console.log("combineAges: ", combineAges)

const combineNames = combine("Silvio", "Romano")
console.log("combineNames: ", combineNames)
