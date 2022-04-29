import '../MainPage/Poster.css';
import React, { useState, useEffect } from "react";
import Genres from "../Genre";

function DetailedPoster(props) {


  const [favy, setFavy] = useState([]);
  const [col, setCol] = useState(false);
  const [idd,setIdd]=useState(0)
  const [open,setOpen]=useState(false);
  let arr2 = [];

 
function modal(){
  props.func(open);
  setOpen(!open)

}

  useEffect(() => {
      setIdd(props.det.id)
  }, []);

const favorites = (e) => {
  const items = JSON.parse(localStorage.getItem("favy")) || [];

  if (items.indexOf(idd) === -1) {
    arr2 = [...items, idd];

    setFavy(arr2);
    setCol(true);

    localStorage.setItem("favy", JSON.stringify(arr2));
  } else {
    items.splice(items.indexOf(idd), 1);
    favy.splice(favy.indexOf(idd), 1);
    setFavy(favy);
    setCol(false);
    localStorage.setItem("favy", JSON.stringify(items));
  }
};
  useEffect(() => {
    const t = JSON.parse(localStorage.getItem("favy")) || [];

    if (t.includes(idd)) {
      setCol(true);
    }
  
  }, [favy, idd, arr2]);
  return (
    <div className="main2">
      <img
        src={`${props.det.image?props.det.image.original:''}`}
        alt="poster"
        className="poster2"
      />
      <div className="layer">
        <div className="over2">
          <div className="name">{props.det.name}</div>
         

          <Genres gen={props.det.genres} />

          <div className="rating">
            {(Math.trunc((Math.random())*5)+1).toFixed(1)}
            <span className="material-icons star">star</span>
          </div>
          <div className="row">
            <button onClick={modal} className="watch">Book</button>
            <div className={col ? "plus3 add" : "plus3 notAdd"} onClick={favorites}>
          +
        </div>
          </div>
        </div>
      </div>
    </div>




  );
}

export default DetailedPoster;
