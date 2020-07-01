import React from 'react';
import styles from './Settings.module.css';

export interface ISettingsProps {
  changeScale(scale: number): void;
}

function Settings(props: ISettingsProps) {

  const changeScalehandler = (scale: number) => {
    props.changeScale(scale);
  }

  return (
    <section className={styles.settings}>
      <div className={styles.option}>
        Scale
      </div>
      {/*insert options here*/}
      <div>
        <div className={styles.cancel}>Cancel</div>
        <div className={styles.safe}>Save</div>
      </div>
    </section>
  )
}

export default Settings;