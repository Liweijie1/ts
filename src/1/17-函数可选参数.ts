//函数可选参数

function mySlice(start?: number, end?: number): void {
    console.log(`起始参数 ${start} 结束参数 ${end}`);
}

mySlice(); // 起始参数 undefined 结束参数 undefined
mySlice(5); // 起始参数 5 结束参数 undefined
mySlice(5, 10); // 起始参数 5 结束参数 10   
export {};