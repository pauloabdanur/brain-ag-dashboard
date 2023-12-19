import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';
import { IconType } from 'react-icons';

interface Props {
  title: string;
  color: {
    backGround: string;
    boxShadow: string;
  };
  value: string;
  png: IconType;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

const CompactCard = (props: Props) => {
  return (
    <div
      className={styles.compactCard}
      style={{
        background: props.color.backGround,
        boxShadow: props.color.boxShadow,
      }}
      onClick={() => props.setExpanded(true)}
    >
      <div className={styles.cardName}>{props.title}</div>
      <div className={styles.detail}>
        <props.png size={22} />
        <span>Total</span>
        <span>{props.value}</span>
      </div>
    </div>
  );
};

export default CompactCard;
