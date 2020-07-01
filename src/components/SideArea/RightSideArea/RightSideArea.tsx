import React, {useState} from 'react';
import styles from './RightSideArea.module.css'
import Settings from "./Settings/Settings";

export interface IRightSideAreaProps {
  changeScale(scale: number): void
}

function RightSideArea(props: IRightSideAreaProps) {

  const [showSettings, setShowSettings] = useState<boolean>(false);

  const toggleSettings = () => {
    showSettings ? setShowSettings(false) : setShowSettings(true);
  }

  return (
    <aside className={styles.rightSideArea}>
      <div className={styles.seetingsButton} onClick={toggleSettings}/>
      {showSettings && <Settings changeScale={props.changeScale}/>}
    </aside>
  )
}

export default RightSideArea;