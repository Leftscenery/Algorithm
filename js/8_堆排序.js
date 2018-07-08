//堆排序：用数组储存。堆是具有以下性质的完全二叉树：每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆；或者每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆。
//树的高度h为lgn+1（以2为底数量的对数，向下取整） h = Math.floor(Math.log(数组长度)/Math.log(2))+1
//每一行最后一个元素index     parent = 2^(h-1) -2
//每个父元素的两个子元素index为     parent*2+1 +2
//每一个子元素n的父级元素为     n%2 != 0 ? Math.floor(n/2) : n/2-1
//有子孙的最后一个点：    Math.floor(n/2)-1

//构建最大堆
function makeMaxHeap(ary) {
    //有子节点的第一个
    let minChildNode = Math.floor(ary.length /2)-1;

    for (let i = minChildNode; i >= 0; i--) {
        sortChildTree(ary,i,ary.length)
    }
}

//将最大的元素调整到顶部，特点是只处理变动的元素，构成链式反应
function sortChildTree(ary,currentNode, endMark) {
    //先默认左子节点为最小
    let child = currentNode*2+1;
    //循环的目的是如果出现了交换动作，就把交换的那个点再次进行排序
    while(child < endMark){
        //左子节点和右子节点对比，得到child为当前最大子节点
        if(ary[child] < ary[child+1] && (child+1) < endMark){
            child ++;
        }
        if(ary[currentNode] - ary[child] < 0){

            var temp = ary[currentNode];
            ary[currentNode] = ary[child];
            ary[child] = temp;

            currentNode = child;
            child = currentNode*2+1;
        }else{
            break;
        }
    }
}


function heapSort(ary) {
    console.time('堆排序：大顶堆');
    //构建最大堆
    makeMaxHeap(ary);
    //堆排序，动哪个，调哪个
    for (let i = ary.length-1; i > 0; i--) {
        let temp = ary[0];
        ary[0] = ary[i];
        ary[i] = temp;
        sortChildTree(ary,0,i);
    }
    console.timeEnd('堆排序：大顶堆');
    return ary;
}