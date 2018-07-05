//归并排序：把两边不断分割，直到两个成组，然后再合起来

function mergeSort(arg){
    function innerMergeSort(arg) {
        //递归结束条件
        if(arg.length==1){
            return arg;
        }

        //分割左右两个数组
        let left = arg.splice(0,Math.floor(arg.length/2));
        let right = arg;

        //递归返回融合
        return mergeAry(innerMergeSort(left),innerMergeSort(right))
    }

    function mergeAry(ary1,ary2) {
        var newAry = [];
        var ary1Index = 0;
        var ary2Index = 0;

        // if((ary1.length+ary2.length)==2){
        //     ary1[0] - ary2[0] >= 0? (newAry.push(ary2[0]),newAry.push(ary1[0])) : (newAry.push(ary1[0]),newAry.push(ary2[0])) ;
        //     return newAry;
        // }

        //对比数组合并成一个新的已排序的数组，当两个数组都不为空的时候
        while( ary1Index<ary1.length && ary2Index<ary2.length){
            if(ary1[ary1Index] - ary2[ary2Index] <= 0){
                newAry.push(ary1[ary1Index]);
                ary1Index++;
            }else{
                newAry.push(ary2[ary2Index]);
                ary2Index++;
            }
        }

        //当一边有剩余另一边没有剩余的时候，把剩下部分全部接到新数组
        if(ary1Index>=ary1.length){
            newAry = newAry.concat(ary2.splice(ary2Index))
        }else{
            newAry = newAry.concat(ary1.splice(ary1Index))
        }
        return newAry;
    }

    console.time('归并排序');
    var result = innerMergeSort(arg);
    console.timeEnd('归并排序');
    return result
}