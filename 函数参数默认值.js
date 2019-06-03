//函数参数默认值
function name(a,b) {
    a=a||5;
    b=b||3;
    console.log(a*b)
    return a*b;
}
//设置默认值
function name1(a=5,b=3) {
    console.log(a*b)
    return a*b;
}
// //
// name1()结果为15
//name1(6)  结果为18，
//name1(,6)报错
//name1(undefined,6)执行结果为30
//name1(8,6)执行结果为48

