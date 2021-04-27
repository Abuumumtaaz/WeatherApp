//store data in localal storage
localStorage.setItem('Name', 'ahmed');
localStorage.setItem('age', 20);

//get data from local storage

//let Name = localStorage.getItem('Name');
//let age = localStorage.getItem('age');

//console.log(Name, age);

//update data 
localStorage.setItem("Name", "Abuu mumtaaz");
localStorage.age = 26;


let Name = localStorage.getItem('Name');
let age = localStorage.getItem('age');

console.log(Name, age);

//deleting storage data
localStorage.removeItem('Name');
localStorage.clear();



 Name = localStorage.getItem('Name');  // delet only one item
 age = localStorage.getItem('age');    // dhamaan ku tirtir

console.log(Name, age);


//stringfaying and parsing Data
/*
const tods = [
    {text: "palaypiano" author: "abuuabuu"},
    {text: "palaypiano2" author: "abuuxamza"},
    {text: "palaypiano3" author: "abuuabdala"},
    {text: "palaypiano4" author: "abuuali"} 
  ];

localStorage.setItem('todos', json.stringfaying(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));
*/