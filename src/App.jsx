import './styles/main.css'
import Tasks_list from './tasks_list.jsx'

function App() {

  return (
    <>
      <div id='alert'></div>

      <div className='create_task_form'>
        <div className='tasks_inputs'>
          <input className='create_tasks_input' id='title_tasks_input' type="text" placeholder='Title...'/>
          <input className='create_tasks_input' id='body_tasks_input' type="text" placeholder='About...'/>
        </div>
        <button className='add_button'>+</button>
      </div>

      <Tasks_list/>
    </>
  )
}

export default App
