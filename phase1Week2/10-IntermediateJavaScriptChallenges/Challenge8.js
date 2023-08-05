function Capitalize(arr){
 
    const arr1=arr.split("");
    const arr2=arr.spilt("");


    arr1.forEach((item,index,orignal)=>{
     if(index%2===0){
        orignal[index]=item.toUpperCase();
     }
    })
    arr2.forEach((item,index,orignal)=>{
        if(index%2!==0){
            orignal[index]=item.toUpperCase();
        }

    })
    const arr1Str=arr1.join();
    const arr2Str=arr2.join();
    return[arr1Str,arr2Str];
} 

