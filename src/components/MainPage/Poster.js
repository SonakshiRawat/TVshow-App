import "./Poster.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Video from "../Video";
import Genres from "../Genre";

function Poster(props) {
  const [poster, setPoster] = useState([]);

  const [favy, setFavy] = useState([]);
  const [col, setCol] = useState(false);
  const [idd, setIdd] = useState(0);
  let arr2 = [];

  useEffect(() => {
    async function allInOne() {
      async function fetchPoster() {
        try {
          const response = await axios.get(
            `https://api.tvmaze.com/search/shows?q=all`
          );
          return response.data;
        } catch (error) {
          console.log("error", error);
        }
      }

      const rand = await fetchPoster();
      let rand_id;
      rand_id = Math.trunc(Math.random() * rand.length - 1);

      setPoster(rand[rand_id]);

      setIdd(rand[rand_id].show.id);

      let arr = [];
    }
    allInOne();
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
        src={`${poster.show ? poster.show.image.original : ""}`}
        alt="poster"
        className="poster2"
      />
      <div className="layer">
        <div className="over2">
          <div className="name">{poster.show ? poster.show.name : ""}</div>

          <Genres gen={poster.show ? poster.show.genres : ""} />

          <div className="rating">
          {poster.show&&poster.show.rating.average?((poster.show.rating.average)/2).toFixed(1):'4.2'}

            <span className="material-icons star">star</span>
          </div>
          <div className="row">
            <Video poster={poster.show} />
            <div
              className={col ? "plus3 add" : "plus3 notAdd"}
              onClick={favorites}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
