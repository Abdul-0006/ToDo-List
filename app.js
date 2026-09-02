let textBox = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");



addBtn.addEventListener("click", () => {
  let userInput = textBox.value;

  if (userInput === "") {
    alert("Please enter a task");
  } else {
    let list = document.createElement("li");
    let text = document.createElement("span");
    let delBtn = document.createElement("button");
    let checkBtn = document.createElement("button");

    checkBtn.classList.add("check-btn", "unchecked");
    list.appendChild(checkBtn);

    list.classList.add("task-item");
    text.classList.add("task-text");
    text.textContent = userInput;
    list.appendChild(text);

    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");
    list.appendChild(delBtn);
    taskList.appendChild(list);
    delBtn.addEventListener("click", () => {
      list.remove();
    });
    checkBtn.addEventListener("click",() => {
      checkBtn.classList.add("check-btn","checked")
      text.style.textDecoration = "line-through"
      text.style.color = "#c7d1d5"
    })
  }
  textBox.value = "";
});
