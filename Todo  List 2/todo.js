
let todoList = [];

window.onload = function () {
    let storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todoList = JSON.parse(storedTodos);
        displayItems();
    }
};

function addTodo() {
    let inputElement = document.querySelector("#todo-input");
            let dateElement = document.querySelector("#todo-date");
            let timeElement = document.querySelector("#todo-time");
            let todoItem = inputElement.value;
            let todoDate = dateElement.value;
            let todoTime = timeElement.value;

            if(todoItem.length <=0) {
                alert("Please Write a todo");
                return false;
            }else if(todoItem.length >0 && todoDate.length <=0) {
                alert("Please Select a date");
                return false;
            }else if(todoTime.length <=0) {
                alert("Please Select a time");
                return false; 
            }

            todoList.push({ item: todoItem, date: todoDate, time: todoTime });
            inputElement.value = '';
            dateElement.value = '';
            timeElement.value = '';
            displayItems();
            saveTodos();
}

function displayItems() {
   
            // let todoStr = localStorage.setItem('todoList', JSON.stringify(todoList));
            let containerElements = document.querySelector
                (".todo-container");
            let newHtml = '';

            for (let i = 0; i < todoList.length; i++) {
                let { item, date, time } = todoList[i];
                newHtml += `
                <span> ${item}</span>
                <span> ${date}</span>
                <span> ${time}</span>
               
                <button  class="btn-delete"  onclick="todoList.splice(${i},1); 
                displayItems();"> Delete</button>

           
                `;

            }
            containerElements.innerHTML = newHtml;
            saveTodos();

}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todoList));
}

 


function deleteTodo(index) {
    for (let i = 0; i < todoList.length; i++) {
        let { item, date, time } = todoList[i];
        newHtml += `
        <span> ${item}</span>
        <span> ${date}</span>
        <span> ${time}</span>
       
        <button  class="btn-delete"  onclick="todoList.splice(${i},1); 
        displayItems();"> Delete</button>

   
        `;

    }

    // Save todos after deleting
    saveTodos();
}


