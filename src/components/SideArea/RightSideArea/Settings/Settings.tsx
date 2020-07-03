import React, {ClassAttributes, useEffect, useRef} from 'react';
import styles from './Settings.module.css';

export interface ISettingsProps {
  changeScale(scale: number): void;

  scale: number;

  hideSettings(): void;

  isDarkBackground: boolean;

  changeBackground(bool: boolean): void;
}

function Settings(props: ISettingsProps) {

  const scaleSlider: any = useRef();
  const scaleInput: any = useRef();
  const bgButtonDark: any = useRef();
  const bgButtonLight: any = useRef();

  useEffect(() => {
    scaleInput.current.value = props.scale;
    scaleSlider.current.value = props.scale;
  }, [props.scale]);

  const changeScaleHandler = (event: any) => {
    props.changeScale(event.target.value);
  }

  const changeBackgroundDarkHandler = (event: any) => {
    props.changeBackground(true);
  }

  const changeBackgroundLightHandler = (event: any) => {
    props.changeBackground(false);
  }

  return (
    <main className={styles.settings}>
      <div className={styles.header}/>
      <section className={styles.option}>
        <p className={styles.optionName}>Scale:</p>
        <input className={styles.slider} type="range" min="0.5" max="2" step="0.1" onChange={changeScaleHandler} ref={scaleSlider}/>
        <input className={styles.numberInput} type="text" onChange={changeScaleHandler} ref={scaleInput}/>
      </section>
      <section className={styles.option}>
        <p className={styles.optionName}>Background:</p>
        <div className={styles.bgButtonDark} onClick={changeBackgroundDarkHandler} ref={bgButtonDark}/>
        <div className={styles.bgButtonLight} onClick={changeBackgroundLightHandler} ref={bgButtonLight}/>
      </section>
      <div className={styles.buttonFooter}>
        <div className={styles.safe} onClick={props.hideSettings}>Close</div>
      </div>
    </main>
  )
}

export default Settings;