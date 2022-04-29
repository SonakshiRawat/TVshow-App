
    import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
  import { useEffect, useState } from "react";
import axios from "axios";
import './MainPage.css'
import Detailed from '../../Pages/Detailed'
  function MainPage(){
  


      const [trendy, setTrendy] = useState([]);
      useEffect(() => {
        async function fetchTrending() {
          try {
            const response = await axios.get(`https://api.tvmaze.com/search/shows?q=all`);
// console.log(response.data);
    
            setTrendy(response.data);
          } catch (error) {
            console.log("error", error);
          }
        }
        fetchTrending();
      }, []);
    
      return (
        <div className="cen">
          <Routes>
            <Route path="/" element={<Home tren={trendy} />}>
              Home
            </Route>
            <Route path="/detailed/:idss" element={<Detailed/>}></Route> 
    
          </Routes>
        </div>
      );

    
}
export default MainPage;