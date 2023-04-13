import { Component } from "react";
import "./App.css";
import FilmsList from "./components/filmsList.jsx";
import SingleFilmPage from "./components/singlefilm.page";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["ready", "set", "go"],
      text: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    let newList = [...this.state.list, this.state.list];
    this.setState({ list: newList, text: "" });
  }
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to = "/">Home</NavLink>
            </li>
          
            <li>
              <NavLink to = "films">Films</NavLink>
            </li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="films" element={<FilmsPage />} />
          <Route path= "film/:id" element= {<SingleFilmPage/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
