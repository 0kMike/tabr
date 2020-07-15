import React, {useState} from 'react';
import BookmarkArea from "./components/bookmarkArea/BookmarkArea";
import RightSideArea from "./components/SideArea/RightSideArea/RightSideArea";
import LeftSideArea from "./components/SideArea/LeftSideArea/LeftSideArea";
import styles from './App.module.css';
import NewBookmark from "./components/NewBookmark/NewBookmark";

function App() {

  const [scale, setScale] = useState<number>(1);
  const [isDarkBackground, setIsDarkBackground] = useState<boolean>(true);
  const [isShowNewBookmarkDialogue, setIsShowNewBookmarkDialogue] = useState<boolean>(false);

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

  const toggleShowNewBookmarkDialogue = (bool: boolean) => {
    setIsShowNewBookmarkDialogue(bool);
  }

  return (
    <div className={styles.App} style={appStyle}>
      <LeftSideArea/>
      <BookmarkArea scale={scale} isDarkBackground={isDarkBackground} toggleShowNewBookmarkDialogue={toggleShowNewBookmarkDialogue}/>
      <RightSideArea changeScale={changeScale} scale={scale} changeBackground={changeBackground} isDarkBackground={isDarkBackground}/>
      {isShowNewBookmarkDialogue && <NewBookmark toggleShowNewBookmarkDialogue={toggleShowNewBookmarkDialogue}/>}
    </div>
  );
}

export default App;
