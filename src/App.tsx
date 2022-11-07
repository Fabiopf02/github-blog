import { Header } from './components/Header/Header'
import { Routes } from './routes'
import styles from './App.module.css'
import { UserContextProvider } from './contexts/user'
import { IssuesContextProvider } from './contexts/issues'

function App() {
  return (
    <>
      <Header />
        <div className={styles.content}>
          <UserContextProvider>
            <IssuesContextProvider>
              <Routes />
            </IssuesContextProvider>
          </UserContextProvider>
        </div>
    </>
  )
}

export default App
