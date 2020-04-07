const form = document.getElementById("form");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const id = 1;

const addTodoItem = () => {
    if (input.value === ""){
        alert("You must enter some value!");
    } else {
        if (list.style.borderTop === "") {
            list.style.borderTop = "2px solid white";
        }

        const text = input.value;
        const item = `<li id="li-${id}">${text}
        <input id="box-${id}"
        class="checkboxes" type="checkbox"></li>`;
        list.insertAdjacentHTML('beforeend', item);
        id++;
        form.reset();
    }
}

addTodoItem();

clickEr = () => {
    btn.addEventListener("click", addTodoItem);
}

clickEr();


// const form = document.getElementById("form");
// const input = document.getElementById("input");
// const addBtn = document.getElementById("btn");
// const list = document.getElementById("list");


// class item {
//     constructor(itemName) {
//         this.createDiv(itemName)
//     }
// }