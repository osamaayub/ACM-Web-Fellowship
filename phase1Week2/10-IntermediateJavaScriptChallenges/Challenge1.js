function Filtering(numArr){
    return numArr.filter(arrItem=>{
        return  (arrItem>=0 && typeof arrItem==='number');
    });
}


const arr=[1,2,4,5];
const number=Filtering(arr);
console.log(number);