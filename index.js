const addTaskBtn = document.getElementsByClassName("add-task-mobile-button")[0];

const addTaskBtnHandler = (e) => {
  e.preventDefault();
  const taskModal = document.getElementsByClassName("task-modal")[0];
  const overlay = document.getElementsByClassName("overlay")[0];
  overlay.addEventListener("click", () => {
    overlay.classList.remove("display-overlay");
    taskModal.classList.remove("show-task-modal");
    return;
  });
  taskModal.classList.add("show-task-modal");
  overlay.classList.add("display-overlay");
  return;
};

addTaskBtn.addEventListener("click", addTaskBtnHandler);
