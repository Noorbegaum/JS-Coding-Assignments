//To find the sum of 2 numbers using higher order functions


function sum(a,b){
    if (b!=null){
        return a+b;
    }else{
        return function(c){   
            sum=a+c;
            return sum;
    }
    }
   
}
console.log(sum(2,3));
console.log(sum(2)(3));