import './App.scss'

import Default from './pages/default/Default'
import Tasks from './pages/tasks/Tasks'
import { useState } from 'react'

function App() {
  const [sectionInView, setSectionInView] = useState("default")
  const [tasks, setTasks] = useState([])

  return (
    <div className="root-element">
      <div className="button-container">
        <button onClick={() => setSectionInView(prevState => prevState === "default"
            ? "tasks"
            : "default")}> {
            sectionInView === "default"
                ? "Upravljanje taskovima"
                : "Pocetna"
        }
        </button>
      </div>
      <div className='display-section'>
        {sectionInView === "default" && <Default tasks={tasks}/>}
        {sectionInView === "tasks" && <Tasks  tasks={tasks} setTasks={setTasks}/>}
      </div>
      
    </div>
  )
}

export default App
