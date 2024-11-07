import TaskCreateSection from "./TaskCreateSection"
import TaskList from "./TasksList"
import React, { useState } from "react";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [alert, showAlert] = useState();

  return (
    <>
      {alert}
      <TaskCreateSection />
      <DndProvider backend={HTML5Backend}>
      <TaskList showAlert={showAlert}/>
      </DndProvider>
    </>
  )
}

export default App
