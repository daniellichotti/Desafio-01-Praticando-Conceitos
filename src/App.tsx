import styles from './App.module.css'
import { Header } from './components/Header'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <p>teste</p>
        </main>
        </div>
    </div>
  )
}

export default App
