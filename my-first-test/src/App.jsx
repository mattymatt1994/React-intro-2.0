import React from "react";
import "./App.css";
// import filmsList from "./components/filmsList";
class App extends React.Component {
  constructor(props) {
    //Super calls the parent constructor
    super(props);
    this.state = {
      list: ["ready", "set", "go"],
      text: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //Make sure that the method is bound to this class
  //Aka, keep Texas from leaving the Union!

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.text],
    });
  }
  render() {
    return (
      <div className="App">
        <h1>React is "okay"..</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="listInput"
            id="listInput"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          {this.state.list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
        <filmsList />
      </div>
    );
  }
}

export default App;
