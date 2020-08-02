import React, {useRef} from 'react';
import styles from './AddBookmarkWindow.module.css';

export interface INewBookmarkProps {
  toggleShowNewBookmarkDialogue(boolean: boolean): void;
  addBookMark(displayName: string, link: string, imagePath: string): void;
}

function NewBookmarkWindow(props: INewBookmarkProps) {

  const displayNameField = useRef<any>();
  const linkField = useRef<any>();
  const fileField = useRef<any>();

  const cancelClickHandler = () => {
    props.toggleShowNewBookmarkDialogue(false);
  }

  const submitHandler = (event: any) => {
    event.preventDefault()
    console.log("bookmark added")
  }

  return (
    <div className={styles.newBookmarkBackground}>
      <div className={styles.newBookmark}>
        <h1 className={styles.header}>Add Bookmark</h1>
        <form className={styles.form}>
          <label>
            Display Name:
            <br/>
            <input type="text" name="name" className={styles.inputText} ref={displayNameField}/>
          </label>
          <label>
            Link:
            <br/>
            <input type="text" name="link" className={styles.inputText} ref={linkField}/>
          </label>
          <label>
            Image:
            <br/>
            <input type="file" name="thumbnail" className={styles.inputFile} ref={fileField}/>
          </label>
          <div className={styles.buttonFooter}>
            <button className={styles.formButton} onClick={cancelClickHandler}>Cancel</button>
            <input className={styles.formButton} type="submit" value="Submit" onClick={submitHandler}/>
          </div>
        </form>
      </div>
    </div>

  )
}

export default NewBookmarkWindow;