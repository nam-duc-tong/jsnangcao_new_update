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
}
var person1 = new Person(1,'Nam',21);
person1.infor();
person1.changeName('Phuong');
person1.infor();