import Task from './Task'
import TaskStorageController from './TaskStorageController';

export default function CreateTaskButton(){
   function addTask() {
      let title = document.getElementById("title_tasks_input").value
      let body = document.getElementById("body_tasks_input").value
   
      if (title != "" && body != "") {
         const controller = new TaskStorageController;
         let task = new Task(title, body);
         controller.addTask(task);
         location.reload();
      }
   }

   return(
      <button className='add_button' onClick={addTask}>+</button>
  )
}