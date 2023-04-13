const addTaskBtnMobile = document.getElementsByClassName("add-task-mobile-button")[0];
const addTaskBtnDesktop = document.getElementsByClassName("add-task-desktop-button")[0];


const addTaskBtnHandler = (e) => {
  e.preventDefault();
  const taskModal = document.getElementsByClassName("task-modal")[0];
  const overlay = document.getElementsByClassName("overlay")[0];
  overlay.addEventListener("click", () => {
    setTimeout(() => {
      overlay.classList.remove("display-overlay");
    }, 700);
    taskModal.classList.remove("show-task-modal");
    return;
  });
  taskModal.classList.add("show-task-modal");
  overlay.classList.add("display-overlay");
  return;
};

addTaskBtnMobile.addEventListener("click", addTaskBtnHandler);
addTaskBtnDesktop.addEventListener("click", addTaskBtnHandler);
