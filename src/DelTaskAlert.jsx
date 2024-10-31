function DelTaskAlert() {
    return (
            <div className="blur_del">
                <div class="alert_box">
                    Delete this task ?
                    <div className="del_button_section">
                        <button id="choice_button_yes" className="choice_button">Yes</button>
                        <button id="choice_button_no" className="choice_button">No</button>
                    </div>
                </div>
            </div>
    )
}

export default DelTaskAlert