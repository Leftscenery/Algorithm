//建立一个已经排序的数组，每次从未排序的里面拿出来一个插到前面数组中合适的位置

function insertSort(arg){
    console.time('insert：to new array');
    let result = [arg[0]];
    for (let i = 1; i < arg.length; i++) {
        for(let j = 0; j<result.length;j++){
            if(arg[i]<=result[j]){
                result.splice(j,0,arg[i]);
                break;
            }else if(j===result.length-1){
                result.push(arg[i]);
                break;
            }
        }
    }
    console.timeEnd('insert：to new array');
    return result
}

function directInsertSort(ary){
    console.time('insert: directly insert, classic');
    for (let i = 0; i < ary.length-1; i++) {
        for (let j = i+1; j < ary.length; j++) {
            if(ary[j]<ary[i]){
                let temp = ary[i];
                ary[i] = ary[j];
                ary[j] = temp;
            }
        }
    }
    console.timeEnd('insert: directly insert, classic');
    return ary
}