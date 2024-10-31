import './styles/main.css'
import TaskStorageController from './TaskStorageController';
import ZeroTaskMessage from './ZeroTaskMessage';
import TaskController from './TaskListController';

function TaskList() {
    const controller = new TaskStorageController;
    let taskListData = controller.getTaskList();

    if(taskListData === null){
        controller.resetList();
    }

    if (taskListData.length === 0){
        return(
            <ZeroTaskMessage/>
        )
    } else {
        const taskListResult = taskListData.map((task, index) => {
            let taskUnit = new TaskController(task.title, task.bodyTask, index);
            return(taskUnit.render());
        });

        return (<div>{taskListResult}</div>)
    }
}

export default TaskList