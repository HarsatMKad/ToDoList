function EditTaskMenu() {
    return (
        <div class="blur_background">
            <div class="edit_box">
                <input class="head_input" id="edit_input_title_task" type="text" placeholder="Title..." value="1234"></input>
                <textarea class="body_input" id="edit_input_body_task" type="text" placeholder="About..."> 1234</textarea>

                <div>
                    <button id="edit_button_cancel" class="edit_button">Cancel</button>
                    <button id="edit_button_save" class="edit_button">Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditTaskMenu