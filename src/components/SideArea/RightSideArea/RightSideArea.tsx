import React, {useState} from 'react';
import styles from './RightSideArea.module.css'
import Settings from "./Settings/Settings";

export interface IRightSideAreaProps {
  scale: number;
  changeScale(scale: number): void;
  isDarkBackground: boolean;
  changeBackground(bool: boolean): void;
}

function RightSideArea(props: IRightSideAreaProps) {

  const [showSettings, setShowSettings] = useState<boolean>(false);

  const toggleSettings = () => {
    showSettings ? setShowSettings(false) : setShowSettings(true);
  }

  const hideSettings = () => {
    setShowSettings(false);
  }

  return (
    <aside className={styles.rightSideArea}>
      <div className={styles.seetingsButton} onClick={toggleSettings}/>
      {showSettings && <Settings changeScale={props.changeScale} scale={props.scale} hideSettings={hideSettings} isDarkBackground={props.isDarkBackground} changeBackground={props.changeBackground}/>}
    </aside>
  )
}

export default RightSideArea;