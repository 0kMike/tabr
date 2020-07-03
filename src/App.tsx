import React, {useState} from 'react';
import BookmarkArea from "./components/bookmarkArea/BookmarkArea";
import RightSideArea from "./components/SideArea/RightSideArea/RightSideArea";
import LeftSideArea from "./components/SideArea/LeftSideArea/LeftSideArea";
import styles from './App.module.css';

function App() {

  const [scale, setScale] = useState<number>(1);
  const [isDarkBackground, setIsDarkBackground] = useState<boolean>(true);

  const changeScale = (scale: number) => {
    setScale(scale);
  }

  const changeBackground = (bool: boolean) => {
    setIsDarkBackground(bool);
  }

  const appStyle = isDarkBackground ? {
      backgroundColor: "var(--color-background-dark)"
    } :
    {
      backgroundColor: "var(--color-background-light)"
    };

  return (
    <div className={styles.App} style={appStyle}>
      <LeftSideArea/>
      <BookmarkArea scale={scale}/>
      <RightSideArea changeScale={changeScale} scale={scale} changeBackground={changeBackground} isDarkBackground={isDarkBackground}/>
    </div>
  );
}

export default App;
