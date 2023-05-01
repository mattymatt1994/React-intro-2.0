import {filterFilmsByDirectors} from "../components/film.helpers";

import { getListOf } from "../components/film.helpers";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
function FilmsPage(props) {
  let [list, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState();
  // const [id] = useParams(film);
  function getFilm() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films/`)
      .then((res) => res.json())
      .then((film) => setList(film))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getFilm();
  }, []);

  let filmsByDirector = filterFilmsByDirectors(list, searchDirector);
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
          {directors.map((director, idx) => {
            return (
              <option key={director + idx} value={director}>
                {director}
              </option>
            );
          })}
        </select>
      </form>
      <ul>
        {filmsByDirector.map((film) => {
          return (
            <li key={film.id}>
              <NavLink to={`${film.id}`}>{film.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default FilmsPage;
