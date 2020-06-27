import React from 'react';
import styles from './App.module.css';
import BookmarkArea from "./components/bookmarkArea/BookmarkArea";
import RightSideArea from "./components/SideArea/RightSideArea/RightSideArea";
import LefttSideArea from "./components/SideArea/LeftSideArea/LefttSideArea";

function App() {


  return (
    <div className={styles.App}>
      <LefttSideArea/>
      <BookmarkArea/>
      <RightSideArea/>
    </div>
  );
}

export default App;
