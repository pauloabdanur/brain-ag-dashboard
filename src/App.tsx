import styles from './App.module.css';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appGlass}>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
