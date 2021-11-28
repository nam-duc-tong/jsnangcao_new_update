let data = [
    {
        name:'Mateo',
        age: '30'
    },
    {
        name:'Sarah',
        age: '20'
    },
    {
        name:'John',
        age: '21'
    },
    {
        name:'Sam',
        age: '23'
    },
    {
        name:'Nam',
        age: '21'
    },
    {
        name:'Terry',
        age: '30'
    }
];
const info = document.querySelector('#info');
let details = data.map(function(item){
    return '<h2><b>' +item.name+' ' +'is '+item.age+ ' years old'+'</b></h2>';
});
info.innerHTML = details.join('\n');