const num=[1,2,3,4,5]

const double=num.map(function (nums) {
    return nums*2
});

const double2=num.map(nums=>{
    return nums*2
})

const double3=num.map(()=>{
    return '123'
})
// const je={
//     name:'li',
//     hobbies:['sleep','coding','reading'],
//     printhobbies:function () {
//         this.hobbies.map(function (param) {
//             //此处this指向window
//             console.log(`${this.name} love ${param}`);
//         })
//     }
// }
const je={
    name:'li',
    hobbies:['sleep','coding','reading'],
    printhobbies:function () {
        this.hobbies.map(param=> {
            //此处this指向 je这个函数
            console.log(`${this.name} love ${param}`)
        })
    }
}
je.printhobbies()
// console.log(double3);
