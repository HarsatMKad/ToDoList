import editIcon from './assets/edit_button_icon.svg'
import shareIcon from './assets/share_button_icon.svg'
import EditTaskMenu from './EditTaskMenu';
import ShareTaskMenu from './ShareTaskMenu';

function TaskInteractButtons({showAlert, index}){
    function showEditMenu() {
        showAlert(<EditTaskMenu showAlert={showAlert} index={index}/>);
    }

    function showShareMenu() {
        showAlert(<ShareTaskMenu showAlert={showAlert}/>);
    }

    return(
        <div className="task_interact_buttons">
            <button className="interact_button" id="editButton" onClick={showEditMenu}>
               <img className="button_icon_scale" src={editIcon} alt="" />
            </button>

            <button className="interact_button">i</button>

            <button className="interact_button" id="shareButton" onClick={showShareMenu}>
                <img className="button_icon_scale" src={shareIcon} alt="" />
            </button>
        </div>
    )
}

export default TaskInteractButtons