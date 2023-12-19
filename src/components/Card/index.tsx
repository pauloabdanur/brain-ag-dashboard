import { useState } from 'react';
import styles from './styles.module.css';
import { IconType } from 'react-icons';
import { AnimateSharedLayout } from 'framer-motion';
import CompactCard from '../CompactCard';

interface Props {
  title: string;
  color: {
    backGround: string;
    boxShadow: string;
  };
  value: string;
  png: IconType;
}

const Card = ({ title, color, value, png }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        '<ExpandedCard />'
      ) : (
        <CompactCard
          title={title}
          color={color}
          value={value}
          png={png}
          setExpanded={setExpanded}
        />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
