import React from 'react';
import styles from "./AddBookmark.module.css";

export interface IAddBookmarkProps {
  scale: number;
}

function AddBookmark(props: IAddBookmarkProps) {

  const bookmarkSize = {
    width: 200 * props.scale,
    height: 125 * props.scale
  }

  return (
    <div className={styles.addBookmark} style={bookmarkSize}>
    </div>
  )
}

export default AddBookmark;