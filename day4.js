//Given an array or integers, retain only those integers which appear
// only once and remove all the remaining elements from the array.

let arr5 = [11, 25, 32, 10, 26, 32,1,7,1,6,1,8,9,4,1];
  
function maxFreq(arr5){
let newArr = [];

for(let i=0;i<arr5.length;i++) {
    for(let j=0;j<arr5.length;j++) {  
 
    if(arr5[i]!=arr5[j] && newArr.includes(arr5[j])==false){
       newArr.push(arr5[j]);
    }
};
}return newArr;
}
console.log(maxFreq(arr5))


