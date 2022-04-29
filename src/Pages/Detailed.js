import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import axios from "axios";
import DetailedPoster from "../components/SecondPage/DetailedPoster";
import Cast from "../components/Cast";
import"../components/SecondPage/Modal.css";
function Detail() {
  const params = useParams();
  const [det, setDet] = useState({});
  const [cast, setCast] = useState([]);
const [mod,setMod]=useState(true)

  useEffect(() => {
    async function fetchDetailed() {
      try {
        const items = JSON.parse(localStorage.getItem("favy")) || [];
        items.forEach(async (n) => {
          let arr = [];
          const response = await axios.get(
            ` https://api.tvmaze.com/shows/${params.idss}?embed=cast`
          );
          setDet(response.data);
          setCast(response.data._embedded.cast);
        });
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchDetailed();
  }, [params.idss]);

function changeValue(data){
  setMod(data)
  return data;
}

function closeModal(){
  setMod(true);
}
  return (
    <React.Fragment>
      <div className="centre">
        <div className={mod? "middle":'middle overlay'}>
          <DetailedPoster det={det} func={changeValue}/>
          <div className="trends">
            <div className="head">Overview</div>
            <p>{det.summary ? det.summary.substring(3) : ""}</p>
            <div className="head">Cast</div>
            <div className="blocks2">
              {cast.map((n) => (
                <Cast mov={n} key={uuid()} />
              ))}
            </div>
          </div>
         
        </div>
        <div className={mod? "modal hidden":'modal'}>
           <div className="shut">
           <div className="ro">
           <div>
          <div>TVMaze presents</div>
          <div className="movie">{det.name}</div>
          </div>
          <div className="tilt">{det.network?det.network.country.name:''}<br/>{det.network?det.network.name:''}</div>
          </div>
          <div className="category">
            <div className="pre">Premiered on <div className="colo">{det.premiered}</div> </div>
            <div className="pre">Ended <div className="colo">{det.ended}</div></div>
            <div className="pre">Show Time <div className="colo">{det.schedule?det.schedule.time:''}</div></div>
            <div className="pre">Runtime <div className="colo">{det.runtime}</div></div>

          </div>
          <button className="book">Book Now</button>

          <span className="material-icons close" onClick={closeModal}>
close
</span>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Detail;
