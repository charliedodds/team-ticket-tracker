import { useState } from 'react';

import TicketCounter from '../TicketCounter';

import styles from './Tracker.module.scss';

const Tracker = ({ employee }) => {
  const [ticketsCompleted, setTicketsCompleted] = useState(0);
  const { name, role } = employee;
  const increment = () => {
    setTicketsCompleted(ticketsCompleted + 1);
  };
  const limitedDecrement = () => {
    if (ticketsCompleted > 0) {
      setTicketsCompleted(ticketsCompleted - 1);
    }
  };
  return (
    <article className={styles.Tracker}>
      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.role}>{role}</h3>
      <TicketCounter
        tickets={ticketsCompleted}
        increment={increment}
        decrement={limitedDecrement}
      />
    </article>
  );
};

export default Tracker;
