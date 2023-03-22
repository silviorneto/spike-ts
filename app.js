function combine3(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges3 = combine3(20, 36, 'as-number');
console.log("combineAges: ", combineAges3);
var combineStringAges3 = combine3(20, 36, 'as-number');
console.log("combineAges: ", combineStringAges3);
var combineNames3 = combine3("Silvio", "Romano", 'as-text');
console.log("combineNames: ", combineNames3);
