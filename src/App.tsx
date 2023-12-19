import styles from './App.module.css';
import MainDash from './components/MainDash';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appGlass}>
        <SideBar />
        <MainDash />
      </div>
    </div>
  );
}

export default App;
