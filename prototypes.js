function Person(id,name,age){
    this.id = id;
    this.name = name;
    this.age = age;
    this.infor = function(){
        console.log(this.id+' ten '+this.name+' tuoi '+this.age);
    }
    this.changeName = function(newName){
        this.name = newName;
    }
    // this.address = address;
    
}
var person1 = new Person(1,'Nam',21);
// person1.infor();
// person1.changeName('Phuong');
// person1.infor();
var person2 = new Person(2,'Phuong',22);
Person.prototype.address = 'Ninh Binh';
// Person.prototype.address = 'Ha Nam';

// console.log(Person.prototype.address);
console.log(person1.address);
console.log(person2.address);

Person.prototype.fullinfor= function(){
    console.log(this.id+ ' _ '+this.name+ ' _ '+this.address);
}
person1.fullinfor();
person2.fullinfor();