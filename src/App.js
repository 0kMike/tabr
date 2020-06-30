import React, {useState} from 'react';
import styles from './App.module.css';
import BookmarkArea from "./components/bookmarkArea/BookmarkArea";
import RightSideArea from "./components/SideArea/RightSideArea/RightSideArea";
import LefttSideArea from "./components/SideArea/LeftSideArea/LefttSideArea";

function App() {

  const [scale, setScale] = useState(1);

  return (
    <div className={styles.App}>
      <LefttSideArea/>
      <BookmarkArea scale={scale}/>
      <RightSideArea/>
    </div>
  );
}

export default App;
