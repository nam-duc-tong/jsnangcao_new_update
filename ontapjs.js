// var  x = 9;
// var y = 99;
// function cong(num1,num2){
//     y+=100;
//     x++;
// }
// cong();
// cong();
// console.log(y);

// var x = 9;
// function cong (num1){
//     num1++;
//     console.log(num1);
// }
// console.log(x);
// cong(x);

// var xe = {
//     hangXe: 'BMW',
//     gia: '300000 USD',
//     xuatXu: 'Germary'
// }
// xe.color = 'Black';
// xe.gia = '250000 USD';
// console.log(xe.hangXe+' '+xe.color+' '+xe.xuatXu+' co gia la '+xe.gia);

// var arrays = [1,2,8,4,5,8,7,8,9,8,11];
// function count(mang){
//     var count = 0;
    
//     for(var i=0;i<mang.length;i++){
//         if(mang[i]==8){
//             count++;
//             // return true;
//         }
//     }
//     console.log(count);
// }
// count(arrays);

// function sum (){
//     if(true){
//         var num1 = 9;//trong function
//         let num2 = 10;//trong block
//     }
//     console.log(num1);
//     // console.log(num2);
// }
// sum();
// for(var i=0;i<10;i++){

// }
// console.log(i);
function sum(num1,num2,cb){
    let kq = cb(num1,num2);
    console.log(kq);
}
sum(8,9,(a,b)=>{
    return a*b;
})