//快速排序1：使用分治法。取一个pivot（一般是中间值）。遍历全部元素，比pivot小的放左边，比pivot大的放右边。然后把两个数组合起来。不断拆分。
function quickSort1(ary) {
    function realSort(ary) {
        if(ary.length <= 1){
            return ary
        }

        var left = [];
        var right = [];
        var pivotIndex = Math.floor(ary.length/2);
        var pivot = ary.splice(pivotIndex,1);

        for (let i = 0; i < ary.length; i++) {
            if(ary[i] - pivot < 0){
                left.push(ary[i]);
            }else{
                right.push(ary[i]);
            }
        }
        return realSort(left).concat(pivot,realSort(right))
    }
    console.time('快速排序：建立新数组不断插入组合');
    var output = realSort(ary);
    console.timeEnd('快速排序：建立新数组不断插入组合');
    return output
}

//快速排序2：核心变量-pivot-pivotIndex-storeIndex-startIndex-lastIndex，核心其实是找最大值+分治，每次把最大值放到最后它应该在的index。此方法选择点在第一个
//这种方法可以计算出每个单位应该处于哪个位置（在自己的环节不管其他人），其实就是节约了遍历所有的时间。
function quickSort2(ary) {
    function realSort(ary,startIndex,endIndex){
        if(startIndex>endIndex){
            return
        }
        var pivot = ary[startIndex];
        var pivotIndex = startIndex;
        var leftIndex = pivotIndex+1;
        var storeIndex = null;

        //单次排序完成
        while(leftIndex-endIndex<=0){
            if(ary[leftIndex]-pivot<=0){
                storeIndex == null ? storeIndex = pivotIndex+1 : storeIndex++;
                [ary[storeIndex],ary[leftIndex]]=[ary[leftIndex],ary[storeIndex]]
            }
            leftIndex++;
        }

        if(storeIndex === null){
            //证明区间内没有变动，因此只是主轴固定
            realSort(ary,pivotIndex+1,endIndex);
        }else{
            //区间内有新排序，切分数组，前后分别继续排序，主轴固定
            [ary[storeIndex],ary[pivotIndex]]=[ary[pivotIndex],ary[storeIndex]];
            [pivotIndex,storeIndex] = [storeIndex,pivotIndex];
            realSort(ary,storeIndex,pivotIndex-1);
            realSort(ary,pivotIndex+1,endIndex)
        }


    }
    console.time('快速排序：中轴为第一个');
    realSort(ary,0,ary.length-1);
    console.timeEnd('快速排序：中轴为第一个');
    return ary
}

//快速排序3：pivot取中间值
function quickSort3(ary) {
    function realSort(ary,startIndex,endIndex){
        if(startIndex>endIndex){
            return
        }
        //算法核心：取中间值
        var middle = Math.floor((endIndex-startIndex)/2)+startIndex;
        [ary[middle],ary[startIndex]]=[ary[startIndex],ary[middle]];
        var pivot = ary[startIndex];
        var pivotIndex = startIndex;
        var leftIndex = pivotIndex+1;
        var storeIndex = null;

        //单次排序完成
        while(leftIndex-endIndex<=0){
            if(ary[leftIndex]-pivot<=0){
                storeIndex == null ? storeIndex = pivotIndex+1 : storeIndex++;
                [ary[storeIndex],ary[leftIndex]]=[ary[leftIndex],ary[storeIndex]]
            }
            leftIndex++;
        }

        if(storeIndex === null){
            //证明区间内没有变动，因此只是主轴固定
            realSort(ary,pivotIndex+1,endIndex);
        }else{
            //区间内有新排序，切分数组，前后分别继续排序，主轴固定
            [ary[storeIndex],ary[pivotIndex]]=[ary[pivotIndex],ary[storeIndex]];
            [pivotIndex,storeIndex] = [storeIndex,pivotIndex];
            realSort(ary,storeIndex,pivotIndex-1);
            realSort(ary,pivotIndex+1,endIndex)
        }
    }
    console.time('快速排序：中轴为中间值');
    realSort(ary,0,ary.length-1);
    console.timeEnd('快速排序：中轴为中间值');
    return ary
}

//随机快速排序：pivot取随机值，然后再次移动到第一位进行对比
function randomQuickSort(ary) {
    function realSort(ary,startIndex,endIndex){
        if(startIndex>endIndex){
            return
        }
        //算法核心：取中间值
        var middle = Math.floor(Math.random()*(endIndex-startIndex))+startIndex;
        [ary[middle],ary[startIndex]]=[ary[startIndex],ary[middle]];
        var pivot = ary[startIndex];
        var pivotIndex = startIndex;
        var leftIndex = pivotIndex+1;
        var storeIndex = null;

        //单次排序完成
        while(leftIndex-endIndex<=0){
            if(ary[leftIndex]-pivot<=0){
                storeIndex == null ? storeIndex = pivotIndex+1 : storeIndex++;
                [ary[storeIndex],ary[leftIndex]]=[ary[leftIndex],ary[storeIndex]]
            }
            leftIndex++;
        }

        if(storeIndex === null){
            //证明区间内没有变动，因此只是主轴固定
            realSort(ary,pivotIndex+1,endIndex);
        }else{
            //区间内有新排序，切分数组，前后分别继续排序，主轴固定
            [ary[storeIndex],ary[pivotIndex]]=[ary[pivotIndex],ary[storeIndex]];
            [pivotIndex,storeIndex] = [storeIndex,pivotIndex];
            realSort(ary,storeIndex,pivotIndex-1);
            realSort(ary,pivotIndex+1,endIndex)
        }
    }
    console.time('随机快速排序');
    realSort(ary,0,ary.length-1);
    console.timeEnd('随机快速排序');
    return ary
}