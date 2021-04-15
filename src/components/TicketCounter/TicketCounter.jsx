const TicketCounter = ({ tickets, decrement, increment }) => {
  return (
    <section>
      <h4>Tickets completed:</h4>
      <p>{tickets}</p>
      <button disabled={tickets <= 0} onClick={decrement}>
        -
      </button>
      <button onClick={increment}>+</button>
    </section>
  );
};

export default TicketCounter;
