import React from 'react';
import styles from './bookmark.module.css';

export interface IBookmarkProps {
  bookmark: {
    name: string,
    link: string,
    thumbnail: string,
  };
  scale: number;
}

function Bookmark(props: IBookmarkProps) {

  const imageUrl = props.bookmark.thumbnail ?
    require(`../../../assets/thumbnails/${props.bookmark.thumbnail}`) : require(`../../../assets/thumbnails/placeholder.png`);

  const bookmarkSize = {
    width: 200 * props.scale,
    height: 125 * props.scale
  }

  const openLink = () => {
    window.open(props.bookmark.link, "_self");
  }

  return (
    <div className={styles.container} style={bookmarkSize}>
      <section style={{backgroundImage: `url(${imageUrl})`}} className={styles.thumbnail} onClick={openLink}>
        <div className={styles.name}>{props.bookmark.name}</div>
      </section>
    </div>
  )
}

export default Bookmark;