// Given 2 arrays, find the elements of the second which are missing
// from the first.
//output 3 7

let arr1 = [1,2,8,6];
let arr2 = [3,7,8,1];
let result = arr2.slice();

function findMissing(a1,a2){
       
        for (let i in a1){
            for (let j in a2){
                if (a1[i]==a2[j]){
                    result.pop(a2[j])
                }
            }
        }
    
    return result;
}
console.log("The missing element in second array is:",findMissing(arr1,arr2))
console.log(" ....................................................... ");


// Find the second non-repeating element in the array


arr = [4,7,2,2,7,6]
let newArr = [];
let repArray = [];
function nonRepeatEle(a){
  for (let i=0;i<arr.length;i++){
  for (let j=i+1;j<arr.length;j++)


    if (a[i]!=a[j] && !repArray.includes(a[i]) && !newArr.includes(a[i])){
        newArr.push(a[i])
      
    }else{
        repArray.push(a[i])
    }
  }
  return newArr;
 }
console.log(nonRepeatEle(arr))