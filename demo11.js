console.log(isNaN(10)) // 输出false (10是一个数值)
console.log(isNaN("10")) // 输出false (可以被转换成数值10)
console.log(isNaN("blue")) // 输出true (不能转换成数值)
console.log(isNaN(true)) // 输出fasle (可以被转换数值 1)
console.log(Number(true)) // 输出true的值，测试为1