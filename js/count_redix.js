//计数排序：应用于不大的数字，把数字做为index，每监测到一个就++，然后按顺序输出
function countingSort(ary) {
    console.time('counting');
    let resultMark = [];
    let final = [];
    for (let i = 0; i < ary.length; i++) {
        resultMark[ary[i]] === undefined ? resultMark[ary[i]] = 1 : resultMark[ary[i]]++;
    }
    for (let i = 0; i < resultMark.length; i++) {
        while(resultMark[i]>0){
            final.push(i);
            resultMark[i]--;
        }
    }
    console.timeEnd("counting");
    return final
}


//桶排序：原理是在计数的基础上，把若干个元素组成一个桶，每个桶内是一个数据集合（链表或者数组），在插入时候需要使用其他算法，例如直接插入，链表插入等等。还有一个问题是要保证数据均分

//基数排序：先通过个位比，放到0-9桶里面，然后把0-9桶按从小到大合成一个数组。然后把这个数组里面每对象按照十位排序，不断迭代直到到达最后一位。
function redixSorting(ary) {
    console.time('redix');
    var currentMod = 0;
    var tempAry = [];
    var combinedAry = [...ary];
    var flg = 1;

    while(flg <= combinedAry.length){
        flg = 1;
        currentMod==0? currentMod=1 : currentMod *= 10;
        tempAry = [];
        //分桶
        for (let i = 0; i < combinedAry.length; i++) {
            //当此位数没有的时候，直接放入0号桶
            if(parseInt(combinedAry[i]/currentMod) == 0){
                tempAry[0] === undefined ? tempAry[0] = [combinedAry[i]] : tempAry[0].push(combinedAry[i]);
                flg++;
                continue;
            }
            //当此位置有的时候，放入对应的桶
            let current = parseInt(combinedAry[i]%(currentMod*10)/(currentMod!=1 ? currentMod : 1));
            tempAry[current] === undefined ? tempAry[current] = [combinedAry[i]] : tempAry[current].push(combinedAry[i]);
        }
        combinedAry = [];
        //合桶
        for (let i = 0; i < 10; i++) {
            if(tempAry[i] !== undefined){
                for (let j = 0; j < tempAry[i].length; j++) {
                    combinedAry.push(tempAry[i][j]);
                }
            }
        }
    }
    console.timeEnd('redix');
    return combinedAry;
}