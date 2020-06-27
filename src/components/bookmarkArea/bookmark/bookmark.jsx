import React, {useState} from 'react';
import styles from './bookmark.module.css';

function Bookmark(props) {
  const {name, link, hasThumbnail, thumbnail} = props.bookmark;

  const [sclaeStyle, setScaleStyle] = useState(1);
  const [thumbnailStyle, setThumbnailStyle] = useState({
    backgroundImage: `url(../../../assets/thumbnails/"${thumbnail})`
  });

  const bookmarkSize = {
    width: 200 * sclaeStyle,
    height: 150 * sclaeStyle
  }

  const openLink = () => {
    window.open(link);
  }

  return (
    <div className={styles.container} style={bookmarkSize}>
      <section className={styles.thumbnail} style={thumbnailStyle} onClick={openLink}/>
      <div className={styles.name}>{name}</div>
    </div>
  )
}

export default Bookmark;