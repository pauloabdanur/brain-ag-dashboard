import Cards from '../Cards';
import styles from './styles.module.css';

const MainDash = () => {
  return (
    <div className={styles.mainDash}>
      <h1>Dashboard</h1>
      <Cards />
    </div>
  );
};

export default MainDash;
