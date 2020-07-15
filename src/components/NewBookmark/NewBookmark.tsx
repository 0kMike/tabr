import React from 'react';
import styles from './NewBookmark.module.css';

export interface INewBookmarkProps {
  toggleShowNewBookmarkDialogue(boolean: boolean): void;
}

function NewBookmark(props: INewBookmarkProps) {

  const cancelClickHandler = () => {
    props.toggleShowNewBookmarkDialogue(false);
  }

  return (
    <div className={styles.newBookmark}>
      <h1 className={styles.header}>Add Bookmark</h1>
      <div className={styles.buttonFooter}>
        <div className={styles.cancelButton} onClick={cancelClickHandler}>Cancel</div>
        <div className={styles.confirmButton}>Confirm</div>
      </div>
    </div>
  )
}

export default NewBookmark;