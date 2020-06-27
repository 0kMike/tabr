import React from 'react';
import styles from './RightSideArea.module.css'

function RightSideArea(props) {
  return (
    <aside className={styles.rightSideArea}>
      <img src="./assets/icons/settings_white.svg" alt="setting icon"/>
    </aside>
  )
}

export default RightSideArea;