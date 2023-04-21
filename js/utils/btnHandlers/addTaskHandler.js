const addTaskHandler = (e) => {
  e.preventDefault();
  const taskModal = document.getElementsByClassName("task-modal")[0];
  taskModal.classList.add("show-task-modal");
  const body = document.getElementsByTagName("body")[0];
  const overlay = document.getElementsByClassName("overlay")[0];
  overlay.addEventListener("click", () => {
    setTimeout(() => {
      overlay.classList.remove("display-overlay");
    }, 700);
    taskModal.classList.remove("show-task-modal");
    body.classList.remove("disable-scroll");
    return;
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  overlay.classList.add("display-overlay");
  body.classList.add("disable-scroll");
  return;
};

export default addTaskHandler;
