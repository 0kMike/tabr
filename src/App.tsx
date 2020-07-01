import React, {useState} from 'react';
import 'App.css';
import BookmarkArea from "./components/bookmarkArea/BookmarkArea";
import RightSideArea from "./components/SideArea/RightSideArea/RightSideArea";
import LefttSideArea from "./components/SideArea/LeftSideArea/LefttSideArea";

function App() {

  const [scale, setScale] = useState(1);

  const changeScale = (scale) => {
    setScale(scale);
  }


  return (
    <div className={App}>
      <LefttSideArea/>
      <BookmarkArea scale={scale}/>
      <RightSideArea changeScale={changeScale}/>
    </div>
  );
}

export default App;
