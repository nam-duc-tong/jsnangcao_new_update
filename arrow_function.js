// var giaithua = n=>{
//     var tich = 1;
//     for(let i =1;i<=n;i++){
//         tich*=i;
//     }
//     console.log(n + "! = "+tich);
// };
// giaithua(10);


// var info = ()=>{
//     console.log("Tong Duc Nam");
// }
// info();

// var sum = (1,3,4,5,6,7,8,9,10,11,12,13);
// console.log("Tong___ "+s);



// function sum(arr){
//     var tong = 0;
//     for(let i = 0;i<arr.length;i++){
//         tong+=arr[i];
//     }
//     return tong;
// }

// console.log(sum([1,3,4,5,6,7,8,9,10,11,12,13]));


// var s = sum(1,3,4,5,6,7,8,9);
// function sum(){
//     var tong=1;
//     for(let i=0;i<arguments.length;i++){
//         tong+=arguments[i];
//     }
//     return tong;
// }
// console.log(s);

// es6

// function hieu(x=8,y=10){
//     if(x-y<0){
//         x = -(x-y);
//         console.log(x);
//         return false;
//     }
//     else{
//         return true;
//     }
// }
// console.log(hieu());


// self-invoke

// (function thuong(x,y){
//     console.log(x/y);
// })(10,5);

// var thuong  = (function thuong(x,y){
//     return x/y;
// })(10,5);
// console.log(thuong);






// var person = {
//     id: 1,
//     name: 'Tong Duc Nam',
//     address: 'Ninh Giang',
//     info: function(){
//         console.log(this.id+ ' - '+this.name);
//     },
//     fullinfo: function(city,country){
//         console.log(this.id+ ' - '+this.name +' - '+ city +' - '+ country);
//     }
// }
// // person.info();
// // person.fullinfo('Ninh Binh','Viet Nam');

// var person2 = {
//     id: 2,
//     name: 'Phuong Pham'
// }
// person.info.call(person2);
// person.info.apply(person2);
// person.fullinfo.apply(person2,['Ninh Binh','Viet Nam']);
// person.fullinfo.call(person2,'Ninh Binh','Viet Nam');




// function closure

// function sum(){
//     var count=0;
//     function step(){
//         count+=2;
//         return count;
//     }
//     return step;// return function
//     // return step() // return number
// }
// var s = new sum();
// console.log(s());
// console.log(s());
// console.log(s());
// console.log(s());
// console.log(s());




// (function xinChao(){
//     var s = 'Hello';
//     var hi = (name)=>{
//         console.log(s+" "+name);
//     }
//     return hi;    
// })()('Nam');
//  xinChao()('Nam');
// console.log(xinChao()('Nam'));



// let $ = (function xinChao(){
//     var s = 'Hello';
//     var hi = (name)=>{
//         console.log(s+" "+name);
//     }
//     return hi;    
// })();
// $('Tong Duc Nam');

// var hieu= (x,y)=> x-y;

// var tong = (x,y)=>(x+y);
// function math(call){
//     console.log(call);
// }
// math(hieu(5,2));
// math(tong(5,2));


// (function thuong(age){
//     console.log('Nam dep trai ' +age+ ' tuoi');
// })(21);
// ..............call and apply............
// var person = {
//     name: 'Tong Duc Nam',
//     age: 21,
//     info: function(){
//         console.log(this.name + ' - ' +this.age+' tuoi .');
//     },
//     fullinfo: function(city,country){
//         console.log(this.name + ' - ' +this.age+' tuoi .'+city+' - '+country);
//     }
// }
// // person.info();
// // person.fullinfo('Ninh Binh','Viet Nam');
// var person2 = {
//     name: 'Phuong',
//     age: 21
// }
// person.info.call(person2);
// person.info.apply(person2);
// person.fullinfo.call(person2,'Ninh Binh','Viet Nam');
// person.fullinfo.apply(person2,['Ninh Binh','Viet Nam']);

// ==============Closure================================
// let $ = (function xinchao(){
//     var s = 'xin chao ';
//     var h1 = (name)=>{
//         console.log(s + ' - '+name);
//     };
//     return h1;
// })();
// $('Tong Duc Nam');

// function counter(){
//     var count = 0;
//     function stepUp(){
//         count++;
//         return count;
//     }
//     return stepUp;
// }
// var s = counter();
// console.log(s());
// console.log(s());
// console.log(s());
// console.log(s());
// console.log(s());
// console.log(s());
// console.log(s());
// console.log(s());
// console.log(s());


// callback 

// var tong  = function(x,y){
//     return x+y;
// }
// var tich = (x,y)=>{
//     return x*y;
// }
// function tinhtoan(call){
//     var kq = call(10,5);
//     console.log(kq);
// }
// tinhtoan(tich);



// ================bind===============
// var person = {
//     name: ' Nam ', 
//     run: function(){
//         // var that = this;
//         setTimeout(()=>{
//          console.log('Toi ten la: '+this.name);
//         },200);
//     }
//     // run();
// }
// person.run();

// var person = {
//     name: 'Nam',
//     age: 19,
//     infor: function(){
//         console.log('Toi ten la: '+this.name+' nam nay toi '+this.age+' tuoi');
//     },
//     fullinfor: function(address,country){
//         console.log('Toi ten la: '+this.name+' nam nay toi '+this.age+' tuoi, que o '+address+' nuoc '+country);
//     } 
// }
// // person.infor();
// // person.fullinfor('Ninh Binh','Viet Nam');
// var person2 = {
//     name: 'Phuong',
//     age: '22'
// }
// person.infor.call(person2);
// person.fullinfor.call(person2,'Ha Nam','Viet Nam');
// person.infor.apply(person2);
// person.fullinfor.apply(person2,['Ha Nam','Viet Nam']);



    // function counter(){
    //     var count = 0;
    //     function step(){
    //         count++;
    //        return count;
    //     }
    //     return step;
    // }
    // var up = counter();
    // console.log(up()); 
//====================== object contructor
// function Person(id,name,age){
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.info = function(){
//         console.log(this.id + ' - '+this.name+' - '+this.age);
//     };
//     this.changeName = (newName)=>{
//         this.name = newName;
//     }
// }
// var person1 = new Person(1,'Nam',19);
// var person2 = new Person(2,'Phuong',22);
// person1.info();
// person2.info();
// person1.changeName('Tuan');
// person2.changeName('Thao');
// person1.info();
// person2.info();

// prototype
// function person(id,name,age){
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     person.prototype.address = 'Ha Noi';
//     person.prototype.fullinfor = function(){
//         console.log(this.id + ' - '+this.name+' - '+this.age+' - '+this.address);
//     }
// }
// var person1 = new person(1,'Nam',21);
// var person2 = new person(2,'Phuong',22);
// person1.fullinfor();
// person2.fullinfor();



// function person(stt,name,age){
//     this.stt = stt;
//     this.name = name;
//     this.age = age;

//     this.infor = function(){
//         console.log('Toi ten la: '+this.name+ ' tuoi: '+this.age);
//     };
//     this.fullinfor = function(){
//         console.log('nguoi thu '+this.stt+' .Toi ten la: '+this.name+ ' tuoi: '+this.age);
//     }
// }
// // person.infor();
// var person1 = new person(1,'A',21);
// person1.infor();
// person1.fullinfor();

// Class 

// // es6
// class person{
//     constructor(id,name,age){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     infor(){
//         console.log(this.id+' - '+this.name+' - '+this.age);
//     }
// }
// var person1 = new person(1,'A',21);
// var person2 = new person(2,'B',22);
// // person1.infor();
// // person2.infor();

// // ket thua
// class Student extends person{
//     constructor(lop,id,name,age){
//         super(id,name,age);
//         this.lop = lop;
//     }
//     info(){
//         super.infor();
//         console.log(this.lop);
//     }
// }
// var student =new Student('Lop 1',1,'Phuong',22);
// student.info();

// object properties access
// var personA = {
//     name: 'A',
//     age: 20,
//     address: 'Ha Noi',
//     talk: function(){
//         return this.name + " Talk About "+this.address+ " .age "+this.age;
//     },
//     infor:function(){
//         return this.name + " Talk About "+this.address+ " .age "+this.age;
//     }
// }
// console.log(personA.name);
// console.log(personA.talk());
// const{name,age} = personA;
// console.log(name);
// console.log(age);
// let{talk} = personA;
// console.log(talk.bind(personA)());

// let {infor} = personA;
// console.log(infor.bind(personA)());
// const{address,...other} = personA;
// console.log(other);


// ================array=================



// var number = [1,2,3,4,5,6,7,8,9,10,11];
// number.forEach(function(num,index){
//     console.log("num "+num+" o vi tri thu "+index);
// })
// var mappp = number.map((x)=>{
//     return x*x;
// });
// console.log(mappp);

// mappp.forEach(function(value,index){
//     // console.log('So '+value+' nam o vi tri thu '+index);
// })
// var loc = mappp.filter(function(x){
//     return x%2==0;
// })
// console.log(loc);
// var rec = loc.reduce(function(x,y){
//     return x+y;
// },0);
// var recmap = mappp.reduce(function(x,y){
//     return x+y;
// },0);
// console.log(recmap);
// console.log(rec);





