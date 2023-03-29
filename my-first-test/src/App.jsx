import logo from './logo.svg';
import './App.css';

function App() {
  return (
   
       <div><h1>Hello World!</h1>
      <form onSubmit = {this.onSubmit}>
      <input
      type = "text"
      name = "text"
      id = "text"
      value = {this.state.text}
      onChange = {(event) =>
        this.setState({
          text= event.target.value,
        })
      }
      ></input>
      <button type = "submit">Submit</button>
        </form>
        <ul>
          {this.state.list.map((item. index) => {
            return <li key= {index}>{item}</li>;
          }
          )

          };
        </ul>
        </div>
  );}
      
  

export default App;
