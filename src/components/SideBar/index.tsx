import styles from './styles.module.css';
import Logo from '../../assets/logo.png';
import { SidebarData } from '../../data/data';
import { MdLogout } from 'react-icons/md';
import { useState } from 'react';

const SideBar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.sideBar}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>

      <div className={styles.menu}>
        {SidebarData.map((item, index) => {
          return (
            <div
              key={index}
              className={
                selected === index
                  ? `${styles.menuItem} ${styles.active}`
                  : `${styles.menuItem}`
              }
              onClick={() => {
                setSelected(index);
              }}
            >
              <item.icon size={25} />
              <span>{item.text}</span>
            </div>
          );
        })}
        <div className={styles.menuItem}>
          <MdLogout size={25} />
          <span>Sair</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
