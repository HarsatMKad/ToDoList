import React, { useState } from "react";
import TaskInteractButtons from "./TaskInteractButtons";
import DelTaskAlert from "./DelTaskAlert";

function TaskInteractButtonController({title, body, index}) {
    let showKey = false;
    const [interactButtons, showInteractButtons] = useState();
    const [delAlert, showDelAlert] = useState();

    return (
        <div>
            {delAlert}
            <div className='task'>
                <div className='task_text_area' onClick={showButtons}>
                    <div className='head_text_stile'>{title}</div>
                    <p className='sub_text_stile'>{body}</p>
                </div>
                <button id='delButton' className='del_button' onClick={fwefeqe}>X</button>
            </div>
            {interactButtons}
        </div>
    )

    function fwefeqe() {
        showDelAlert(<DelTaskAlert/>)
    }

    function showButtons() {
        if(showKey){
            showKey = true;
            showInteractButtons(<></>);
        } else {
            showKey = false;
            showInteractButtons(<TaskInteractButtons index={index}/>);
        }
    }
}

export default TaskInteractButtonController;