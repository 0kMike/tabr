import React, {useEffect, useRef} from 'react';
import styles from './Settings.module.css';

export interface ISettingsProps {
  changeScale(scale: number): void;

  scale: number;

  hideSettings(): void;

  isDarkBackground: boolean;

  changeBackground(bool: boolean): void;
}

function Settings(props: ISettingsProps) {

  const scaleSlider: any = useRef<HTMLInputElement>();
  const scaleInput: any = useRef<HTMLInputElement>();
  const bgButtonDark: any = useRef<HTMLDivElement>();
  const bgButtonLight: any = useRef<HTMLDivElement>();

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
        <section className={styles.optionConfig}>
          <input className={styles.slider} type="range" min="0.5" max="2" step="0.1" onChange={changeScaleHandler} ref={scaleSlider}/>
          <input className={styles.numberInput} type="text" onChange={changeScaleHandler} ref={scaleInput}/>
        </section>
      </section>
      <section className={styles.option}>
        <p className={styles.optionName}>Background:</p>
        <section className={styles.optionConfig}>
          <div className={styles.bgButtonDark} onClick={changeBackgroundDarkHandler} ref={bgButtonDark}/>
          <div className={styles.bgButtonLight} onClick={changeBackgroundLightHandler} ref={bgButtonLight}/>
        </section>
      </section>
      <div className={styles.buttonFooter}>
        <div className={styles.closeButton} onClick={props.hideSettings}>Close</div>
      </div>
    </main>
  )
}

export default Settings;