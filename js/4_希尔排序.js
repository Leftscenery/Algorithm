//希尔排序的原理是设置一个步长，然后每隔这么多步长进行抽出元素合成新的数组进行排序。不断降低步长到1为止。基础是直接插入排序。特点是当最后一次步长为1的有序排序时候，直接插入排序很节约性能

function shellSort(ary) {
    console.time('希尔排序');
    var step = Math.floor(ary.length/2)+1;
    while (step>=1){
        for (let i = 0; i < ary.length - step; i+=step) {
            for(let j = i+step; j < ary.length; j+=step){
                if(ary[i]>=ary[j]){
                    let temp = ary[i];
                    ary[i] = ary[j];
                    ary[j] = temp;
                }
            }
        }
        step--;
    }
    console.timeEnd('希尔排序');
    return ary
}