const argsLength = (...args) => {
    let result = []
    result.push(...args)
    return result.length
}
console.log(argsLength([3,2,4], [1,2], {}, null));