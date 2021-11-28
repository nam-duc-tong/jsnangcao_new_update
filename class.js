// class person{
//     constructor(id,name){
//         this.id  = id;
//         this.name = name;
//     }
//     info(){
//         console.log(this.id+ ' _ '+this.name);
//     }
//     static hi(){
//         console.log('Xin chao moi nguoi');
//     }
//     // bien static chi su dung trong class, cac doi tuong ko duoc phep su dung
// }
// var person1 = new person(1,'Nam');
// var person2 = new person(2,'Phuong');
// // person1.info();
// // person2.info();
// // person.hi();
// class sinhvien extends person {
//     constructor(id,name,address){
//         super(id,name);
//         this.address= address;
//     } 
//     info(){
//         super.info();
//         console.log(this.address);
//     }
//     fullinfo(){
//         console.log('Tong Duc Nam xin chao moi nguoi toi dang o: '+this.address);
//     }
// }
// var sv1 = new sinhvien(1,'Hoc sinh gioi','Viet Nam');
// sv1.info();
// // sv1.fullinfo();

// class person{
//     constructor(id,name,age){
//         this.name = name;
//         this.id = id;
//         this.age = age;
//     }
//     infor(){
//         console.log(this.id+' _ '+this.name+' _ '+this.age);
//     }
// }
// var person1 = new person(1,'Nam',21);
// // person1.infor();

// class student extends person {
//     constructor(id,name,age,address){
//         super(id,name,age);
//         this.address = address;
//     }
//     fullinfor(){
//         console.log(this.id+' _ '+this.name+' _ '+this.age+' _ '+this.address);
//     }
// }
// var student1 = new student(1,'Nam',21,'Viet Nam');
// student1.fullinfor();


