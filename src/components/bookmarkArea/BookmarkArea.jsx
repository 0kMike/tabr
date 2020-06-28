import React from 'react';
import bookmarksArray from "../../assets/bookmarks/bookmarks.json";
import Bookmark from "./bookmark/bookmark";
import styles from './BookmarkArea.module.css'
import AddBookmark from "./bookmark/AddBookmark/AddBookmark";

function BookmarkArea(props) {

  const {scale} = props

  const generateBookmarks = bookmarksArray.map((item, index) => {
    return <Bookmark key={index} bookmark={item} scale={scale}/>
  })

  return (
    <main className={styles.main}>
      <header className={styles.header}/>
      <section className={styles.bookmarkContainer}>
        {generateBookmarks}
        <AddBookmark scale={scale}/>
      </section>
    </main>
  )
}

export default BookmarkArea;