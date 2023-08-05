function lowerCaseCount(str){
    const result=str.match(/[a-z]/g);
    return  result ? result.length:0;
}