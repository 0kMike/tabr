import React, {useState} from 'react';
import BookmarkArea from "./components/bookmarkArea/BookmarkArea";
import RightSideArea from "./components/SideArea/RightSideArea/RightSideArea";
import LeftSideArea from "./components/SideArea/LeftSideArea/LeftSideArea";
import styles from './App.module.css';
import NewBookmark from "./components/NewBookmark/NewBookmark";
import bookmarksArray from "../src/assets/bookmarks/bookmarks.json";

function App() {

  const [scale, setScale] = useState<number>(1);
  const [isDarkBackground, setIsDarkBackground] = useState<boolean>(true);
  const [isShowNewBookmarkDialogue, setIsShowNewBookmarkDialogue] = useState<boolean>(false);

  console.log()

  const changeScale = (scale: number) => {
    setScale(scale);
  }

  const changeBackground = (bool: boolean) => {
    setIsDarkBackground(bool);
  }

  const toggleShowNewBookmarkDialogue = (bool: boolean) => {
    setIsShowNewBookmarkDialogue(bool);
  }

  const addBookMark = (displayName: string, link: string, imagePath: string) => {

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
      <BookmarkArea scale={scale} isDarkBackground={isDarkBackground} toggleShowNewBookmarkDialogue={toggleShowNewBookmarkDialogue} bookmarksArray={bookmarksArray}/>
      <RightSideArea changeScale={changeScale} scale={scale} changeBackground={changeBackground} isDarkBackground={isDarkBackground}/>
      {isShowNewBookmarkDialogue && <NewBookmark toggleShowNewBookmarkDialogue={toggleShowNewBookmarkDialogue} addBookMark={addBookMark}/>}
    </div>
  );
}

export default App;
