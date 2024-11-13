import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TaskUnit from './TaskUnit';
import ZeroTaskMessage from './ZeroTaskMessage';
import * as actions from './actions/tasksActions';

function TaskList({ tasks, moveTask, showAlert }) {
  const moveCard = (dragIndex, hoverIndex) => {
    moveTask(dragIndex, hoverIndex);
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

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  moveTask: actions.moveTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);