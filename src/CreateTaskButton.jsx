import Task from './Task'
import TaskStorageController from './TaskStorageController';

class CreateTaskButton{
    addTask() {
        let title = document.getElementById("title_tasks_input").value
        let body = document.getElementById("body_tasks_input").value
     
        if (title != "" && body != "") {
           const controller = new TaskStorageController;
           let task = new Task(title, body);
           controller.addTask(task);
           location.reload();
        }
     }

     render() {
        return(
            <button className='add_button' onClick={this.addTask}>+</button>
        )
     }
}

export default CreateTaskButton