import CreateTaskButton from './CreateTaskButton.jsx'

function TaskCreateSection(){
  return (
    <div className='create_task_form'>
      <div className='tasks_inputs'>
        <input className='create_tasks_input' id='title_tasks_input' type="text" placeholder='Title...'/>
        <input className='create_tasks_input' id='body_tasks_input' type="text" placeholder='About...'/>
      </div>
      <CreateTaskButton/>
    </div>
    )
}

export default TaskCreateSection