
class TaskStorageController {
    resetList(){
        const arr = []
        localStorage.setItem("taskList", JSON.stringify(arr));
    }

    addTask(task){
        let taskList = JSON.parse(localStorage.getItem('taskList'));
        taskList.push(task);
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }

    getTaskList(){
        let taskList = JSON.parse(localStorage.getItem('taskList'));
        return taskList;
    }
}

export default TaskStorageController