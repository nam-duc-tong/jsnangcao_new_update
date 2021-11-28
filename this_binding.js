// console.log(this);
// console.log('Tong Duc Nam');

// function hello(){
//     var name = 'Tong Duc Nam';
//     console.log('Hello '+name);
//     console.log(`Hello ${name}`);
// }
// // hello();
// var person = {
//     name: 'Tong Duc Nam',
//     age: 22,
//     info: function(){
//         // var that = this;
//         // setTimeout(()=>{
//             console.log('Toi ten la: '+this.name+ ' tuoi '+this.age);
//         // },200);
//     }
// }
// person.info();

// var person2 = {
//     id: 2,
//     name: 'Phuong Pham',
//     age: 22
// }
// person.info.bind(person2).call(person2);
// // var heelo = hello.bind(person2);
// var heelo = person.info.bind(person2);
// heelo();



// class Person{
//     constructor(id){
//         this._id = id;
//     }
//     info(){
//         console.log("ID: "+this._id);
//     }
//     infoArrow = ()=>{
//         console.log("ID Arrow: "+this._id);
//     }
// }
// let person1 = new Person(10);
// person1.info();
// person1.infoArrow();


// setTimeout(function(){
//     person1.infoArrow();
//     person1.info();
// },500)

// arguments
// function sum(){
//     var tong = 0;
//     for(let i=0;i<arguments.length;i++){
//         tong+=arguments[i];
//     }
//     return tong;
// }
// var s = sum(1,2,3,4,5,6,7,8,9);
// console.log('Tong__ ' +s);

// var num = [1,2,3,4,5,6,7,8,9,10,11];
// var sum = num.map(function(x){
//     return x*2;
// }).reduce(function(x,y){
//     return x+y;
// },0);
// console.log(sum);
