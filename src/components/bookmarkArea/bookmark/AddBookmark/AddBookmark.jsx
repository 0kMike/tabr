import React from 'react';
import styles from "./AddBookmark.module.css";

function AddBookmark(props) {

  const {scale} = props;

  const bookmarkSize = {
    width: 200 * scale,
    height: 125 * scale
  }

  return (
    <div className={styles.addBookmark} style={bookmarkSize} scale={scale}>
    </div>
  )
}

export default AddBookmark;