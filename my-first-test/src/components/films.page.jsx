import { useEffect, useState } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";
import{Link} from "react-router-dom";

function FilmsPage(props) {
  let [list, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState("");
  function getFilm() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((res) => res.json())
      .then((film) => setList(film))
      .catch((err) => console.error(err));}
    useEffect(() => {
      getFilm();
    }, []);
    let filmsByDirector = filterFilmsByDirector(list, searchDirector);
    let directors = getListOf(list, "director");
  
  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <label htmlFor="SearchDirector">Filter By Director</label>
        <select
          name="searchDirector"
          id="searchDirector"
          value={searchDirector}
          onChange={(e) => setSearchDirector(e.target.value)}
           > 
        <option value="">All</option>
          {directors.map((idx)=>{
            return(
             <option key={director + idx} value={director}>{director}</option>   
            );
          })}  
       </select>
      </form>
      <ul>
        {filmsByDirector.map((film)=>{
            return(
               <li key={film.id}>
                <Link to={`${film.id}`}>{film.title}</Link>
               </li> 
            );
        })}
      </ul>
      </div>);}
    export default FilmsPage; 