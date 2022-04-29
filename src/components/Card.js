import "./Card.css";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

function Trending(props) {

  return (
    <Link to={`/detailed/${props.mov.id}`} key={uuid()}>

    <div className={props.num?'block length':'block'} key={props.mov.id}>
      <img
        src={`${props.mov.image.original}`}
        alt="movie"
        className="trending"
      />
      <div className="layer2">
        <div className='plus2' >
          {`${props.mov.runtime} min`}
        </div>

        <div className="nam">{props.mov.name}</div>
        <div className="rating2">
        {props.mov.rating.average?((props.mov.rating.average)/2).toFixed(1):(Math.trunc((Math.random())*5)+1).toFixed(1)}
          <span className="material-icons star">star</span>
        </div>
      </div>
    </div>
     </Link>
  );
}

export default Trending;
