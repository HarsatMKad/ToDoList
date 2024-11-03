import React, { useEffect, useState } from 'react'
import './styles/main.css'
import TaskStorageController from './TaskStorageController'
import ZeroTaskMessage from './ZeroTaskMessage'
import Card from './DNDTest'
import TaskUnit from './TaskUnit'

function TaskList({ showAlert }) {
  const controller = new TaskStorageController()
  const [taskListData, setTaskListData] = useState(controller.getTaskList())

  useEffect(() => {
    if (taskListData === null) {
      controller.resetList()
    }
  }, [])

  const moveCard = (dragIndex, hoverIndex) => {
    const updatedTasks = [...taskListData]
    const draggedTask = updatedTasks[dragIndex]
    updatedTasks.splice(dragIndex, 1)
    updatedTasks.splice(hoverIndex, 0, draggedTask)
    setTaskListData(updatedTasks)
    controller.moveTask(dragIndex, hoverIndex);
  }

  if (taskListData.length === 0) {
    return <ZeroTaskMessage />
  } else {
    const taskListResult = taskListData.map((task, index) =>
      <TaskUnit key={`${task.title}-${index}-${task.bodyTask}`} index={index} moveCard={moveCard} showAlert={showAlert} title={task.title} body={task.bodyTask}/>)
    return (<div>{taskListResult}</div>)
  }
}

export default TaskList