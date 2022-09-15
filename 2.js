// find duplicate elements in a given array
arr = [1,7,3,5,4,7,2,6,3,6,7,4,43]
let count =0;
let newArr=[];
let j=1;
function duplicateArray(a){
    for (let i in a){
       for (let j in a){
        if (i==j){
            continue;
        }
        if (a[i]==a[j]){
            count ++;
            if (count>0 && [...newArr].includes(a[j])==false )
            newArr.push(a[j]);
        }
       }
}return newArr;   
}
console.log(duplicateArray(arr));
// newArr=[7,1]

// for (let i in arr){
//     if ([...newArr].includes(arr[i])==false ){
//     newArr.push(arr[i]);
//     console.log(newArr);
// }else {

// }

// }


