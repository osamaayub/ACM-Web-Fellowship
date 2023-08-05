const arrayDiff=(a,b)=>{
 if(a.length===0){
    return [];

 }
 if(b.length===0){
    return a;
 }
 let newA=null;
 let newB=null;
 a.forEach((arrItem,index)=>{
    const aCopy=newA.slice();
    const bCopy=newB.slice();

    if(b.includes(arrItem)){
        newA=aCopy.filter(item=>item!==arrItem);
        newB=bCopy.filter(item=>item!==arrItem);
    }
 })
 return newA;
}