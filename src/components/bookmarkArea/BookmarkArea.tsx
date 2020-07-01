import React from 'react';
import bookmarksArray from "../../assets/bookmarks/bookmarks.json";
import Bookmark from "./bookmark/bookmark";
import styles from './BookmarkArea.module.css'
import AddBookmark from "./bookmark/AddBookmark/AddBookmark";

export interface IBookmarkAreaProps {
  scale: number;
}

function BookmarkArea(props: IBookmarkAreaProps) {

  const generateBookmarks = bookmarksArray.map((item, index) => {
    return <Bookmark key={index} bookmark={item} scale={props.scale}/>
  })

  return (
    <main className={styles.main}>
      <header className={styles.header}/>
      <section className={styles.bookmarkContainer}>
        {generateBookmarks}
        <AddBookmark scale={props.scale}/>
      </section>
    </main>
  )
}

export default BookmarkArea;