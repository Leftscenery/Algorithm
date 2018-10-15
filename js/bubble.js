//原理：把当前值与后一项进行对比，如果顺序不对就交换

function BubbleSort(arg) {
    console.time('bubble');
    for (let i = 0; i < arg.length-1; i++) {
        for (let j = i+1; j < arg.length; j++) {
            if((arg[i]-arg[j])>=0){
                let temp = arg[i];
                arg[i] = arg[j];
                arg[j] = temp;
            }
        }
    }
    console.timeEnd('bubble');
    return arg
}
