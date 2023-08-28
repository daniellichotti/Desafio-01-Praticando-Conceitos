import styles from './App.module.css'
import { Header } from './components/Header'
import { TasksCreation } from './components/TasksCreation'

import './global.css';

function App() {

  return (
    <div>
      <Header />
      <div>
        <main>
          <TasksCreation />
        </main>
        </div>
    </div>
  )
}

export default App
