import React, { useState } from "react";
import TaskInteractButtons from "./TaskInteractButtons";
import DelTaskAlert from "./DelTaskAlert";

function TaskUnit({showAlert, title, body, index}) {
    let showKey = false;
    const [interactButtons, showInteractButtons] = useState();

    return (
        <div>
            <div className='task'>
                <div className='task_text_area' onClick={showButtons}>
                    <div className='head_text_stile'>{title}</div>
                    <p className='sub_text_stile'>{body}</p>
                </div>
                <button id='delButton' className='del_button' onClick={openDelMenu}>X</button>
            </div>
            {interactButtons}
        </div>
    )

    function openDelMenu() {
        showAlert(<DelTaskAlert showAlert={showAlert} index={index}/>)
    }

    function showButtons() {
        if(showKey){
            showKey = true;
            showInteractButtons();
        } else {
            showKey = false;
            showInteractButtons(<TaskInteractButtons showAlert={showAlert} index={index}/>);
        }
    }
}

export default TaskUnit;