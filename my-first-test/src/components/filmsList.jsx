// import { Component } from "react";
// import "./App.jsx";
// import FilmsList from "./component/filmsList";
// class FilmsList extends Component{
//     construtor(Props){
//         super(props);
//         this.state={
//             list: []
//         };}
//         getFilms(){
//             fetch("https://ghibliapi.herokuapp.com/films")
//             .then((response)=> response.json)
//             .then((films) => this.State({list:films}))
//             .catch((error)=> console.error(error));
//         }
//         componentDidMount(){
//             this.getFilms();
//         }
  
           

           
            
//             render(){
//                 return (
//                     <ul>
//                         {this.state.list.map((film) => {
//                            return <li key={film.id}>{film.title}</li>;
                        
//                     })}
//                     </ul>
//                 );
//             }
//         }
               
// export default filmsList;