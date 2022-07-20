let todos = async() => {
    let todosdetails = await fetch("https://jsonplaceholder.typicode.com/todos")
    let details = todosdetails.json(); 
    return details;
}
function Mainfunction(userId,id,title,completed){
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
}
let arr = [];
let display = async() => {
    let todolist = await todos();
    console.log(todolist)
    todolist.forEach(element => {
        let newfunction = new Mainfunction(element.userId,element.id,element.title,element.completed);
        arr.push(newfunction);
    });
    console.log('array');
    console.log(arr);
    return arr;
}
// display()
let output = async() => {
    let finaloutput = await display();
    let str ="";
    finaloutput.forEach((value) => {
        console.log(value);
            str+=`<tr><td>${value.userId}</td><td>${value.id}</td><td>${value.title}</td><td>${value.completed}</td></tr>`
    })
    document.getElementById("displayhere").innerHTML = str;
}
output();