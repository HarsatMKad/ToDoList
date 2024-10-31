import TaskInteractButtonController from "./TaskUnit";

class TaskUnit{
    taskTitle;
    taskBody;
    index;

    constructor(title, body, index){
        this.taskBody = body;
        this.taskTitle = title;
        this.index = index
    }

    render(){
        return (
            <TaskInteractButtonController title={this.taskTitle} body={this.taskBody} index={this.index}/>
        )
    }
}

export default TaskUnit;