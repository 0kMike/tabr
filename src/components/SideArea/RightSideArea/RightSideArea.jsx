import React from 'react';
import styles from './RightSideArea.module.css'
import settingsIcon from '../../../assets/icons/settings_white.svg'

function RightSideArea(props) {
  return (
    <aside className={styles.rightSideArea}>
      <div className={styles.seetingsButton}/>
    </aside>
  )
}

export default RightSideArea;