import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from './actions/tasksActions';

export default function DelTaskAlert({ showAlert, index }) {
  const dispatch = useDispatch();

  function handleDelete(){
    dispatch(deleteTask(index))
    showAlert();
  }
  
  function closeAlert() {
    showAlert();
  }

  return (
    <div className="blur_del">
      <div className="alert_box">
        Delete this task?
        <div className="del_button_section">
          <button id="choice_button_yes" className="choice_button" onClick={handleDelete}>
            Yes
          </button>
          <button id="choice_button_no" className="choice_button" onClick={closeAlert}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}