import './styles/main.css'
import TaskStorageController from './TaskStorageController';
import ZeroTaskMessage from './ZeroTaskMessage';
import TaskUnit from "./TaskUnit";

function TaskList({showAlert}) {
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
        const taskListResult = taskListData.map((task, index) =>  <TaskUnit showAlert={showAlert} title={task.title} body={task.bodyTask} index={index}/>);
        return (<div>{taskListResult}</div>)
    }
}

export default TaskList