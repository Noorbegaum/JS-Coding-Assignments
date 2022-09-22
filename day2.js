// find duplicate elements in a given array
let arr = [1,7,3,5,4,7,2,6,3,6,7,4,43]

let newArr=arr.slice().sort();
let result=[];
console.log(newArr);
function duplicateArray(a){
    for (i=0;i<a.length;i++){
        if (a[i]==a[i+1] &&!result.includes(a[i])){
            result.push(a[i]);
        }
    }
    return result;   
    }
    console.log(duplicateArray(newArr));
    
//     for (let i in a){
//        for (let j in a){
//         if (i==j){
//             continue;
//         }
//         if (a[i]==a[j]){
//             count ++;
//             if (count>0 && [...newArr].includes(a[j])==false )
//             newArr.push(a[j]);
//         }
//        }
// }





// }

// }


