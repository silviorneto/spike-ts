type Combinable = number | string
type ConversionDescriptor = "as-number" | "as-text"


function combine3 (
    input1: Combinable, 
    input2: Combinable, 
    resultType: ConversionDescriptor
    ) 
{
    let result: number | string
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === "as-number") {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combineAges3 = combine3(20, 36, 'as-number')
console.log("combineAges: ", combineAges3)

const combineStringAges3 = combine3(20, 36, 'as-number')
console.log("combineAges: ", combineStringAges3)

const combineNames3 = combine3("Silvio", "Romano", 'as-text')
console.log("combineNames: ", combineNames3)
