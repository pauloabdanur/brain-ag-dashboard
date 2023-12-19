import { CardsData } from '../../data/data';
import Card from '../Card';
import styles from './styles.module.css';

const Cards = () => {
  return (
    <div className={styles.cards}>
      {CardsData.map((card, index) => {
        return (
          <div key={index} className={styles.parentContainer}>
            <Card
              title={card.title}
              color={card.color}
              value={card.amount}
              png={card.png}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
