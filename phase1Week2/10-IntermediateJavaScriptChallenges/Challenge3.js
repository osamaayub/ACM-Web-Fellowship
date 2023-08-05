function list(names){

    return names.reduce((prev,current,index,array)=>{
        if(index===0){
            return current.name;
        }
        else if(index===array.length-1){
            return prev+ '&'+current.name;
        }
        else{
            return prev + ',' +current.name;
        }

    },'')

}