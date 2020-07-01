import React, {useState} from 'react';
import styles from './bookmark.module.css';

function Bookmark(props) {
  const {name, link, thumbnail} = props.bookmark;
  const {scale} = props;

  const imageUrl = thumbnail ?
    require(`../../../assets/thumbnails/${thumbnail}`) : "";

  const bookmarkSize = {
    width: 200 * scale,
    height: 125 * scale
  }

  const openLink = () => {
    window.open(link, "_self");
  }

  return (
    <div className={styles.container} style={bookmarkSize}>
      <section style={{ backgroundImage: `url(${imageUrl})` }} className={styles.thumbnail} onClick={openLink}>
        <div className={styles.name}>{name}</div>
      </section>
    </div>
  )
}

export default Bookmark;