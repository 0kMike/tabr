import React from 'react';
import bookmarksArray from "../../assets/bookmarks/bookmarks.json";
import Bookmark from "./bookmark/bookmark";
import styles from './BookmarkArea.module.css'



function BookmarkArea(props) {

  const generateBookmarks = bookmarksArray.map((item, index) => {
    return <Bookmark key={index} bookmark={item}/>
  })

  return (
    <div className={styles.main}>
      {generateBookmarks}
    </div>
  )
}

export default BookmarkArea;