import React, {useState} from 'react';
import styles from './bookmark.module.css';
import pic from '../../../assets/thumbnails/1.jpg'

function Bookmark(props) {
  const {name, link, hasThumbnail, thumbnail} = props.bookmark;
  const {scale} = props;



  const style = {
    backgroundImage: pic
  }

  const bookmarkSize = {
    width: 200 * scale,
    height: 125 * scale
  }

  const openLink = () => {
    window.open(link, "_self");
  }

  return (
    <div className={styles.container} style={bookmarkSize}>
      <section style={style} className={styles.thumbnail} onClick={openLink}>
        <div className={styles.name}>{name}</div>
      </section>
    </div>
  )
}

export default Bookmark;