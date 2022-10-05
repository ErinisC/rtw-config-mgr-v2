import React, {Component} from "react";
// import logo from './logo.svg';
import './App.css';

import Form from './Form';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
    this.state = {inputValue: ""}
  }

  callAPI = async () => {
    const response = await fetch("http://127.0.0.1:3001/get_json");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }

  componentDidMount(){
    this.callAPI()
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }))
    .catch(err => err);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Config Manager</h1>
          <Form />
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
  
}

export default App;
