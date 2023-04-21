const submitTaskFormHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const todos = localStorage.getItem("todos");
  const todo = new Todo(data);
//   TO BE DONE
  if (todos) localStorage.setItem("todos", [todos, todo]);
  if (!todos) localStorage.setItem("todos", todo);
  return;
};

class Todo {
  constructor(data) {
    this.name = data.firstname.concat(data.lastname);
    this.description = data.description;
    this.status = data.status;
    this.priority = data.priority;
  }
}

export default submitTaskFormHandler;
