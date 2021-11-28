var person={
    name: 'Tong Duc Nam',
    age: 21,
    address: 'Ninh Binh',
    Talk: function(){
        console.log('Toi ten la: '+this.name+ ' _ '+this.age+ ' _ '+this.address);
    }    
}
// person.Talk()
const{name,age} = person;
console.log(name+' '+age);
const{Talk} = person;
Talk.bind(person)();

const{address,...rest} = person;

console.log(address);
rest.Talk();
console.log(rest.name);
console.log(rest.age);