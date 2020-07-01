import React, {useState} from 'react';
import BookmarkArea from "./components/bookmarkArea/BookmarkArea";
import RightSideArea from "./components/SideArea/RightSideArea/RightSideArea";
import LefttSideArea from "./components/SideArea/LeftSideArea/LefttSideArea";
import styles from './App.module.css';

function App() {

  const [scale, setScale] = useState<number>(1);

  const changeScale = (scale: number) => {
    setScale(scale);
  }

  return (
    <div className={styles.App}>
      <LefttSideArea/>
      <BookmarkArea scale={scale}/>
      <RightSideArea changeScale={changeScale}/>
    </div>
  );
}

export default App;
