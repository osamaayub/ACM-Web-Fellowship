function isValidWalk(walk){
    var dx=0;
    var dy=0;
    var dt=walk.length;
    for(let v=0;v<walk.length;v++){
        switch(walk[v]){
            case 'n':dy--;
            break;
            case's':dy++;
            break;
            case 'w':dx--;
            break;
            case 'e':dt++;
            break;
        }
    } 

    return dt===10 &&dx===0 &&dy===0;

}