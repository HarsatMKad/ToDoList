import TaskCreateSection from "./TaskCreateSection"
import TaskList from "./TasksList"
import React, { useState } from "react";

function App() {
  const alertContainer = <div id='alert_container'></div>
  const [alert, showAlert] = useState();

  return (
    <>
      {alert}
      <TaskCreateSection />
      <TaskList showAlert={showAlert}/>
    </>
  )
}

export default App
