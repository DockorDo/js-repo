// eval():将传入的字符串当作js代码执行
console.log(eval("1+1"))

eval(`
    (function(){
        console.log('函数自调用')
    })()
`)

// isFinite():判断传入参数是有限数字

console.log(isFinite(1/3))
console.log(isFinite(Infinity))
console.log(isFinite(1/2))

// isNaN():判断参数是否为NaN
console.log(isNaN(NaN))
console.log(isNaN(123))

/*
    parseFloat():解析字符串转换为小数
    parseInt():解析字符串转换为整数
*/

console.log(parseFloat("1.123"))
console.log(parseFloat("99"))
console.log(parseInt("99"))
console.log(parseInt("99.999999"))

/*
    encodeURI():将特定字符的每个实例替换为转义序列
    decodeURI():对encodeURI()进行解码
*/

const encodeurl= encodeURI('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI')
console.log(encodeurl);
console.log(decodeURI(encodeurl))

/*
    encodeURIComponent():将特定字符的每个实例替换为转义序列
    decodeURIComponent():对encodeURIComponent进行解码
*/
const encodeurl2= encodeURIComponent('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI')
console.log(encodeurl2);
console.log(decodeURIComponent(encodeurl2))

