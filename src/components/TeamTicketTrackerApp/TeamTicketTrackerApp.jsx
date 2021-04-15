import Tracker from '../Tracker';

import team from '../../data/team';

import styles from './TeamTicketTrackerApp.module.scss';

const TeamTicketTrackerApp = () => {
  return (
    <main className={styles.TeamTicketTrackerApp}>
      <h1>Team Ticket Tracker</h1>
      <section className={styles.trackerContainer}>
        {team.map((employee) => (
          <Tracker key={employee.id} employee={employee} />
        ))}
      </section>
    </main>
  );
};

export default TeamTicketTrackerApp;
