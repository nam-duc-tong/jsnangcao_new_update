var person = {
    name: 'John',
    age: 34,
    infor: function(){
        console.log('Toi ten la: '+this.name+' - '+this.age+' tuoi');
    },
    fullinfor: function(city,country){
        console.log('Toi ten la: '+this.name+' - '+this.age+' tuoi. Que o '+city+ ',nuoc '+country);
    }
}
// var per1 = new person;
// person.fullinfor('Ninh Binh','Viet Nam');
var person2 = {
    name: 'Nam',
    age: 21
}
person.infor.call(person2);
person.infor.apply(person2);
person.fullinfor.call(person2,'Ninh Binh','Viet Nam');
person.fullinfor.apply(person2,['Ninh Binh','Viet Nam']);