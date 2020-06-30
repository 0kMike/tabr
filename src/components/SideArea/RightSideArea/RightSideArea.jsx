import React, {useState} from 'react';
import styles from './RightSideArea.module.css'
import Settings from "./Settings/Settings";

function RightSideArea(props) {

  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    showSettings ? setShowSettings(false) : setShowSettings(true);
  }

  return (
    <aside className={styles.rightSideArea}>
      <div className={styles.seetingsButton} onClick={toggleSettings}/>
      {showSettings && <Settings/>}
    </aside>
  )
}

export default RightSideArea;