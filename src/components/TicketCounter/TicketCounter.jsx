import styles from './TicketCounter.module.scss';

const TicketCounter = ({ tickets, decrement, increment }) => {
  const color =
    tickets < 2
      ? 'red'
      : tickets < 4
      ? 'orangered'
      : tickets < 6
      ? 'orange'
      : tickets < 8
      ? 'gold'
      : tickets < 10
      ? 'greenyellow'
      : 'green';
  return (
    <section className={styles.TicketCounter}>
      <h4 className={styles.title}>Tickets completed:</h4>
      <p style={{ color }} className={styles.tickets}>
        {tickets}
      </p>
      <section className={styles.buttonContainer}>
        <button disabled={tickets <= 0} onClick={decrement}>
          -
        </button>
        <button onClick={increment}>+</button>
      </section>
    </section>
  );
};

export default TicketCounter;
