module.exports = function reverse (n) {
    // let n = 123;
    let arr = Math.abs(n).toString().split('').reverse().join(''); 
  let result = Number(arr);
  return result;
//   console.log(typeof result);
}
