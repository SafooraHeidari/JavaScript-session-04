// ///////////////////////////// Problem 0 ////////////////////////
// function square(n) {
//     let sqr = '';
//     for (let i = 0; i < n; i++) {
//         // console.log(i)
//         if (i === 0 || i === n - 1) {
//
//             sqr += '*'.repeat(n) + '\n';
//         }
//         else sqr += '*' + ' '.repeat(n - 2) + '*' + '\n';
//     }
//     return sqr;
// }
//
// console.log(square(5));


// ///////////////////////////// Problem 1 ////////////////////////
// function repeatNum(n){
//     let strNum = n.toString();
//     for (let i = 0; i < strNum.length; i++) {
//         let m = strNum.substring(i, i + 1);
//         console.log('%s: %s', m, m.repeat(Number(m)));
//     }
// }
// repeatNum(2304695)


// ///////////////////////////// Problem 2 ////////////////////////
// function reverse (str) {
//     let newStr = '';
//     let m = str.length;
//     if (m === 1){
//         newStr = str[0];
//     }
//     else if (m === 0){
//         newStr = '';
//     }
//     else{
//         newStr = str[m-1]+reverse(str.substr(1,m-2))+str[0];
//     }
//     return newStr;
// }
//
// console.log(reverse('salam be hame!'))


// ///////////////////////////// Problem 3 ////////////////////////
// function stringIn(str1, str2){
//     let m = str1.length;
//     for (let i = 0; i < m; i++){
//         let temp = str1.substring(i, m);
//         if (temp === str2) return i;
//     }
//     return -1;
// }
//
// console.log(stringIn('hello world', 'world'))


// ///////////////////////////// Problem 4 ////////////////////////
// function omitList(lst1,lst2){
//     for (let i in lst1) {
//         for (let j in lst2) {
//             if (lst1[i] === lst2[j]) lst1[i] = [];
//         }
//     }
//     return lst1.filter(Number);
// }
//
// let lst1 = [2,3,4,5,6,7];
// let lst2 = [3,4];
// console.log(omitList(lst1,lst2))


// ///////////////////////////// Problem 5 ////////////////////////
// //////////////// using for-loop
// function moveArr(arr,index,offset){
//     let m = arr.length;
//     let newArr = [...arr];
//     if (index > m || offset > m || index+offset > m) return console.log('Bad Input')
//     if (offset < 0 && index+offset < 0) return console.log('Bad Input')
//
//     newArr[index+offset] = arr[index];
//     if (offset >=0){
//         for (let i = 0; i < offset; i++){
//             newArr[index+i] = arr[index+i+1];
//         }
//     }
//     else{
//         for (let i = index+offset; i < index; i++){
//             newArr[i+1] = arr[i];
//         }
//     }
//     return newArr
// }
// const arr1 = [2,3,4,5,6,8]
// console.log(arr1)
// console.log(moveArr(arr1,2,3))
// console.log(moveArr(arr1,2,-2))


// ///////////// using splice-method
// function moveArr(arr,index,offset){
//     let newArr = [...arr];
//     let m = newArr.length;
//     let val = newArr.splice(index,1);
//     newArr.splice(index + offset, 0, ...val);
//     return newArr;
// }
// const arr1 = [2,3,4,5,6,8]
// console.log(arr1)
// console.log(moveArr(arr1,2,-2))
// console.log(moveArr(arr1,2,1))


// ///////////////////////////// Problem 6 ////////////////////////
// function omit(str){
//     let result = '';
//     for (let i = 0; i < str.length; i++){
//         if (str[i] !== str[i+1]){
//             result += str[i];
//         }
//     }
//     return result;
// }
//
// console.log(omit('aaaaaaaaabbbbbccccdddddeeeebbbe'))

