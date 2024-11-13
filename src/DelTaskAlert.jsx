import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/tasksActions';

function DelTaskAlert({ showAlert, index, deleteTask }) {
  const handleDelete = useCallback(() => {
    deleteTask(index);
    showAlert();
  }, [deleteTask, index, showAlert]);

  const handleClose = useCallback(() => {
    showAlert();
  }, [showAlert]);

  return (
    <div className="blur_del">
      <div className="alert_box">
        Delete this task?
        <div className="del_button_section">
          <button id="choice_button_yes" className="choice_button" onClick={handleDelete}>
            Yes
          </button>
          <button id="choice_button_no" className="choice_button" onClick={handleClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  deleteTask: actions.deleteTask,
};

export default connect(null, mapDispatchToProps)(DelTaskAlert);