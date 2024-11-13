import React from 'react';
import TaskUnit from './TaskUnit';
import ZeroTaskMessage from './ZeroTaskMessage';
import { useSelector, useDispatch } from 'react-redux';
import { moveTask } from './actions/tasksActions';

function TaskList({ showAlert }) {
  const tasks = useSelector(state => state.tasks); 
  const dispatch = useDispatch();

  const moveCard = (dragIndex, hoverIndex) => {
    dispatch(moveTask(dragIndex, hoverIndex));
  };

  if (tasks.length === 0) {
    return <ZeroTaskMessage />;
  } else {
    const taskListResult = tasks.map((task, index) => (
      <TaskUnit
        key={`${task.title}-${index}-${task.bodyTask}`}
        index={index}
        moveCard={moveCard}
        showAlert={showAlert}
        title={task.title}
        bodyTask={task.bodyTask}
      />
    ));
    return <div>{taskListResult}</div>;
  }
}

export default TaskList;