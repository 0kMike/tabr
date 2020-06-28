import React, {useState} from 'react';
import styles from './RightSideArea.module.css'

function RightSideArea(props) {

  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    showSettings ? setShowSettings(false) : setShowSettings(true);
  }

  return (
    <aside className={styles.rightSideArea}>
      <div className={styles.seetingsButton} onClick={toggleSettings}/>
      {showSettings && <h1>settings wip</h1>}
    </aside>
  )
}

export default RightSideArea;