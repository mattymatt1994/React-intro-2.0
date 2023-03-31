import { Component } from "react";
import "./App.css";
import FilmsList from "./component/filmsList";
class FilmsList extends Component{
    render(){
        construtor(Props);{
            super(props);
            this.state ={
                films: [],
            };
        }
        getFilms(){
            fetch("https://ghibliapi.herokuapp.com/filmd")
            .then((respomse)=> Response.json)
            .then((films) => this.State({list:films}))
            .catch((error)=> console.error(errorfiln));
            componentDidMount(){
                this.getFilms();
            }

           
            }
            render(){
                return (
                    <ul>
                        {this.state.list.map((film) => {
                           return <li>{film.title}</li>
                        
                    })}
                    </ul>
                );
            }
        }}
               
export default filmsList;