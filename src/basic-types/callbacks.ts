function addAndHandle(
    n1: number, 
    n2: number, 
    cb: (n: number) => void
) {
    const result = n1 + n2
    cb(result)
}

addAndHandle(1, 2, (number) => {
    console.log(number)
})