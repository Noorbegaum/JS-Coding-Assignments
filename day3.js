// Write a program to find the maximum and minimum value of an array
let arr=[2,2,3,1,2,2];
function maxArrayVal(arr){
   return Math.max(...arr);
}
function minArrVal(arr){
    return Math.min(...arr);
}
console.log(maxArrayVal(arr));
console.log(minArrVal(arr));

// Write a program to check if the array is sorted in ascending order or
// descending order.

let arr2=[1,2,3,4,5,6];
let arr3=[7,6,5,4,3,2,1];

function check(arr){
    let order = "";
    for (let i =0;i<arr.length;i++){
    
            if (arr[i]<arr[i+1]){
                return  "ascending";
            }else {
                return "descending"
            }

    }

}
console.log(check(arr2));
console.log(check(arr3));

// Write a program to remove a specific element from an array.
//For example: remove all the 1 from arr

let elemToRemove = 1;
function removeEle(ele){
    return filteredArray=arr.filter((f)=>f!=ele)}
console.log(removeEle(elemToRemove))

//Find the element that has the maximum frequency in the array


let arr5 = [11, 25, 32, 10, 26, 32,1,7,1,6,1,8,9,4,1];

   
function maxFreq(arr5){

let maxFreqEle=0;
let maxCount=0;
let count = 0;
for(let i=0;i<arr5.length;i++) {
  
    for(let j=0;j<arr5.length;j++) {  
    
    if(arr5[i]==arr5[j]){
        count++;  
       
    }if (count>maxCount ){
        maxCount=count;
        maxFreqEle = arr5[i];
        
    }
}
  ;
}return maxFreqEle;
}
console.log(maxFreq(arr5))
