import TaskStorageController from "./TaskStorageController";

function EditTaskMenu({showAlert, index}) {
    const controller = new TaskStorageController;
    const task = controller.getTaskList()[index];
    const taskTitle = task.title;
    const taskBody = task.bodyTask;

    function closeAlert(){
        showAlert();
    }

    function editTask(){
        let title = document.getElementById("edit_input_title_task").value
        let body = document.getElementById("edit_input_body_task").value

        if (title != "" && body != "") {
            const controller = new TaskStorageController;
            controller.editTask(index, title, body);
            showAlert();
            location.reload();
        }
    }

    return (
        <div className="blur_background">
            <div className="edit_box">
                <input className="head_input" id="edit_input_title_task" type="text" placeholder="Title..." defaultValue={taskTitle}></input>
                <textarea className="body_input" id="edit_input_body_task" type="text" placeholder="About..." defaultValue={taskBody}></textarea>

                <div>
                    <button id="edit_button_cancel" className="edit_button" onClick={closeAlert}>Cancel</button>
                    <button id="edit_button_save" className="edit_button" onClick={editTask}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditTaskMenu