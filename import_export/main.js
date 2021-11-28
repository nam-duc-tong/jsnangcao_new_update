// import{User_name,mangSo} from './user.js'
// import * as user from './user.js'
// import Person from './user.js'
// import {tong as sum} from './user.js'
// // console.log(User_name);
// console.log(mangSo);
// // console.log(user.User_name);
// console.log(user.mangSo);

// sum(10,5);
//  class Student extends Person{
//      constructor(id,name,age){
//          super(id,name);
//          this.age = age;
//      }
//      infor(){
//          super.infor();
//          console.log(this.name);
//      }  
//  }
//  let student = new Student(1,'A',22);

//  console.log(student);      
// import Person from './user.js';
import { User_name,MangSo } from './user.js';
import * as user from './user.js';
import Person from './user.js';
import{tong as sum} from './user.js';// Doi ten ham tong thanh sum
console.log(User_name);
console.log(MangSo);

console.log(user.User_name);
console.log(user.MangSo);
sum(10,5);
class Student extends Person{
    constructor(id,name,age){
        super(id,name);
        this.age = age;
    }
    info(){
        super.info();
        console.log(this._name);
    }
}
let student = new Student(1,'A',21);
console.log(student);
