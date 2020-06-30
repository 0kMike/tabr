import React from 'react';
import styles from './Settings.module.css';

function Settings(props) {
  return (
    <section className={styles.settings}>
      {/*insert options here*/}
      <div>
        <div className={styles.cancel}>Cancel</div>
        <div className={styles.safe}>Save</div>
      </div>
    </section>
  )
}

export default Settings;