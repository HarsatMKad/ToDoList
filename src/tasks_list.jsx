import './styles/main.css'

class Task {
    title;
    bodyTask;

    constructor(title, bodyTask) {
        this.title = title;
        this.bodyTask = bodyTask;
    }
}

function Tasks_list() {

    let taskListData = JSON.parse(localStorage.getItem('taskList'));

    if(taskListData === null){
        let arr = [];
        localStorage.setItem("taskList", JSON.stringify(arr));
    }

    console.log(taskListData.length);

    if (taskListData.length === 0){
        return(
            <>
                <div className='zero_task_message'>
                    <hr className='separate_line'></hr>
                    <h2 className='zero_task_message_text'>No tasks</h2>
                    <hr className='separate_line'></hr>
                </div>
            </>
        )
    } else {
        const taskListResult = taskListData.map((task) => 
            <div>
                <div className='task'>
                    <div className='task_text_area'>
                        <div className='head_text_stile'>{task.title}</div>
                        <p className='sub_text_stile'>{task.bodyTask}</p>
                    </div>
                    <button id='delButton' className='del_button'>X</button>
                </div>
                <div className='task_interact_buttons' id='interact_buttons'></div>
            </div>
        );

        return (<div>{taskListResult}</div>)
    }
}

export default Tasks_list