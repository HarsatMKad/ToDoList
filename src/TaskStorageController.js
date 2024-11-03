
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

    editTask(index, newTitle, newBody){
        let taskList = JSON.parse(localStorage.getItem('taskList'));
        taskList[index].title = newTitle;
        taskList[index].bodyTask = newBody;
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }

    delTask(index){
        let taskList = JSON.parse(localStorage.getItem('taskList'));
        taskList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }

    getTaskList(){
        let taskList = JSON.parse(localStorage.getItem('taskList'));
        return taskList;
    }

    moveTask(dragIndex, hoverIndex) {
        const taskList = this.getTaskList();
        const draggedTask = taskList[dragIndex];
        taskList.splice(dragIndex, 1);
        taskList.splice(hoverIndex, 0, draggedTask);
        localStorage.setItem('taskList', JSON.stringify(taskList));
      }
}

export default TaskStorageController