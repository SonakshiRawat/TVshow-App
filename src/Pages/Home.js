import Poster from "../components/MainPage/Poster";
import uuid from "react-uuid";
import Trending from "../components/Card";
function Home(props){

// console.log(props.tren);
    return(
        <div className="middle" >
     
        <Poster />
        <div className="trends">
          <div className="blocks">  
            {props.tren.map((n) => (
              <Trending mov={n.show} key={uuid()} />
             ))}
      
          </div>
        </div>
      </div>
    )
}

export default Home;