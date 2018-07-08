//建立一个已经排序的数组，每次从未排序的里面拿出来一个插到前面数组中合适的位置

function insertSort(arg){
    console.time('插入排序：插入到新数组');
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
    console.timeEnd('插入排序：插入到新数组');
    return result
}

function directInsertSort(ary){
    console.time('插入排序：直接插入，本体交换');
    for (let i = 0; i < ary.length-1; i++) {
        for (let j = i+1; j < ary.length; j++) {
            if(ary[j]<ary[i]){
                let temp = ary[i];
                ary[i] = ary[j];
                ary[j] = temp;
            }
        }
    }
    console.timeEnd('插入排序：直接插入，本体交换');
    return ary
}