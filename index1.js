// let arr = []
// const allEqual = arr => arr.every(v => v === arr[0])

// console.log(allEqual(arr))


// let ss = "hiii my name isshibam";

// for (let i = 0; i <= ss.length - 4; i++) {
//     let substr = ss.substring(i, i + 4);
//     console.log(substr);

// }

// let temp = 4
// let reg = `\\d\{${temp}\}`
// let regex = new RegExp(reg)

// console.log('1212'.match(regex))


let len = 5;
let a3 = "53623783";

let pattern = /\d{4}/g;
let result = a3.match(pattern);
console.log(result);
console.log(result.length);