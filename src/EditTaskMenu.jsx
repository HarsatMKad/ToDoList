import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from './actions/tasksActions';

function EditTaskMenu({ showAlert, index }) {
  const dispatch = useDispatch(); 
  const task = useSelector(state => state.tasks[index]); 
  
  const inputTitleRef = useRef(null); 
  const inputBodyRef = useRef(null); 

  useEffect(() => {
    inputTitleRef.current.focus();
  }, []);

  function closeAlert() {
    showAlert();
  }

  function handleEditTask() {
    const title = inputTitleRef.current.value.trim();
    const body = inputBodyRef.current.value.trim();
    
    if (title !== '' && body !== '') {
      dispatch(editTask(index, title, body));
      showAlert();
    }
  }

  return (
    <div className="blur_background">
      <div className="edit_box">
        <input
          ref={inputTitleRef}
          className="head_input"
          id="edit_input_title_task"
          type="text"
          placeholder="Title..."
          defaultValue={task?.title || ''}
        />
        <textarea
          ref={inputBodyRef}
          className="body_input"
          id="edit_input_body_task"
          type="text"
          placeholder="About..."
          defaultValue={task?.bodyTask || ''}
        ></textarea>

        <div>
          <button id="edit_button_cancel" className="edit_button" onClick={closeAlert}>
            Cancel
          </button>
          <button id="edit_button_save" className="edit_button" onClick={handleEditTask}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect()(EditTaskMenu);