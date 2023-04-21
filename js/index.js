import addTaskHandler from "./utils/btnHandlers/addTaskHandler.js";
import formHandler from "./utils/formHandler/formHandler.js";

const addTaskBtnMobile = document.getElementsByClassName(
  "add-task-mobile-button"
)[0];
const addTaskBtnDesktop = document.getElementsByClassName(
  "add-task-desktop-button"
)[0];

const addTaskForm = document.getElementsByClassName("task-modal")[0];

addTaskBtnMobile.addEventListener("click", addTaskHandler);
addTaskBtnDesktop.addEventListener("click", addTaskHandler);
addTaskForm.addEventListener("submit", formHandler);
