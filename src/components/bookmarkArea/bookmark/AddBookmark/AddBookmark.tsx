import React from 'react';
import styles from "./AddBookmark.module.css";

export interface IAddBookmarkProps {
  scale: number;
  toggleShowNewBookmarkDialogue(bool: boolean): void;
}

function AddBookmark(props: IAddBookmarkProps) {

  const addBookmarkClickHandler = () => {
    props.toggleShowNewBookmarkDialogue(true);
  }

  const bookmarkSize = {
    width: 200 * props.scale,
    height: 125 * props.scale
  }

  return (
    <div className={styles.addBookmark} style={bookmarkSize} onClick={addBookmarkClickHandler}>
    </div>
  )
}

export default AddBookmark;