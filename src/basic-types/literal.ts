function combine2 (input1: number | string, input2: number | string, resultType: "as-number" | "as-text") {
    let result: number | string
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === "as-number") {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combineAges2 = combine2(20, 36, 'as-number')
console.log("combineAges: ", combineAges2)

const combineStringAges2 = combine2(20, 36, 'as-number')
console.log("combineAges: ", combineStringAges2)

const combineNames2 = combine2("Silvio", "Romano", 'as-text')
console.log("combineNames: ", combineNames2)
