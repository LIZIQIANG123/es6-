// //var  同一作用域可以重复声明  可以重新赋值    函数作用域

// // var i=0;
// // var i=1;
// //可以重复命名

// // for (var index = 0; index < 10; index++) {
// //    console.log(index)//输出的index为0-9之间的数
// //    setTimeout(() => {
// //        console.log(`index:${index}`)//此时输出的index一直为10，
// //    }, 1000);
// // }
// // console.log(i)


//  //   console.log(color)//输出为undefined
//   //  var color='yellow'


// //let  同一作用域不能重复声明  可以重新赋值    块级作用域 
// // let j=0;
// // let j=1;
// // console.log(j)
//不可重复声明

// // for (let index = 0; index < 10; index++) {
// //     console.log(index)//输出的index为0-9之间的数
// //     setTimeout(() => {
// //         console.log(`index:${index}`)//此时输出的index一直为0-9之间的数，
// //     }, 1000);
// //  }

// //const  同一作用域不能重复声明  引用类型时可以重新赋值，值类型不可    块级作用域   
// // const i=0;
// // const i=0;

// // console.log(i)
