import TaskStorageController from "./TaskStorageController"

function DelTaskAlert({showAlert, index}) {
    function closeAlert(){
        showAlert();
    }

    function delTask(){
        const taskController = new TaskStorageController;
        taskController.delTask(index);
        showAlert();
        location.reload();
    }

    return (
            <div className="blur_del">
                <div className="alert_box">
                    Delete this task ?
                    <div className="del_button_section">
                        <button id="choice_button_yes" className="choice_button" onClick={delTask}>Yes</button>
                        <button id="choice_button_no" className="choice_button" onClick={closeAlert}>No</button>
                    </div>
                </div>
            </div>
    )
}

export default DelTaskAlert