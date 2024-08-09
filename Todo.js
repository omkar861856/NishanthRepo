const form = document.querySelector("#todoForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const todo = formData.get("todo");

  const todoList = document.querySelector("#todoList");

  const list = document.createElement("li");
  list.textContent = todo;
  list.addEventListener("click", () => {
    list.classList.toggle("complete");
    console.log(list);
    console.log("toggling arrow call func");
  });

  //add a toggle - complete - incomplete class

  todoList.appendChild(list);

  form.reset();
});
