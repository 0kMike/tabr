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
    <div className={styles.newBookmarkBackground}>
      <div className={styles.newBookmark}>
        <h1 className={styles.header}>Add Bookmark</h1>
        <form className={styles.form}>
          <label>
            Display Name:
            <br/>
            <input type="text" name="name" className={styles.inputText}/>
          </label>
          <label>
            Link:
            <br/>
            <input type="text" name="link" className={styles.inputText}/>
          </label>
          <label>
            Image:
            <br/>
            <input type="file" name="thumbnail"/>
          </label>
          <div className={styles.buttonFooter}>
            <div className={styles.submitButton} onClick={cancelClickHandler}>Cancel</div>
            <input className={styles.submitButton} type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    </div>

  )
}

export default NewBookmark;