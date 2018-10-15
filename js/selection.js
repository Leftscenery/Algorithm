//原理：选取剩余最小值,插到或者交换到最前面

//添加思想
function selectionSort1(arg) {
    console.time('selection: to new array');
    let result=[];
    while(arg.length > 0){
        let min = arg[0];
        for (let i = 0; i < arg.length; i++) {
            if(arg[i]<=min){
                min = arg[i];
            }
        }
        arg.splice(arg.indexOf(min),1);
        result.push(min);
    }
    console.timeEnd('selection: to new array');
    return result
}

//交换思想
function selectionSort2(arg) {
    console.time('selection: same array exchange');
    let minIndex = 0;
    for(let i=0;i<arg.length-1;i++){
        minIndex = i;
        for (let j = i+1; j < arg.length; j++) {
            if(arg[j]<=arg[minIndex]){
                minIndex = j
            }
        }
        var temp = arg[minIndex];
        arg[minIndex] = arg[i];
        arg[i] = temp;
    }
    console.timeEnd('selection: same array exchange');
    return arg
}