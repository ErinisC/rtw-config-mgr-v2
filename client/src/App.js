import React, {Component} from "react";
// import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
    this.state = {inputValue: ""}
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount(){
    this.callAPI();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Config Manager</h1>
          <form className="form-style">
            <div className="form-item">
              <label className="form-label">is_fullscreen</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div  className="form-item">
              <label className="form-label">api_server_ip</label>
              <input type="text" />
            </div>
            <div  className="form-item">
              <label className="form-label">api_server_port</label>
              <input type="number" />
            </div>
            <div  className="form-item">
              <label className="form-label">api_is_secure</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div  className="form-item">
              <label className="form-label">is_hide_cursor</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div  className="form-item">
              <label className="form-label">display_announce_num</label>
              <input type="number" />
            </div>
            <div  className="form-item">
              <label className="form-label">lang_select</label>
              <input type="text" />
            </div>
            <div className="form-item">
              <label className="form-label">_lang_select_TW</label>
              <input type="text" />
            </div>
            <div className="form-item">
            <label className="form-label">_lang_select_US</label>
            <input type="text" />
            </div>
            <div className="form-item">
              <label className="form-label">is_audio_play</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">is_show_county_map</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">is_device_r3</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">is_show_eq_intensity_text_on_map</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">is_show_eq_report</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">show_eq_report_period_ms</label>
              <input type="number" />
            </div>
            <div className="form-item">
              <label className="form-label">is_show_annoucement</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">countdown_stop_eq_view_ms</label>
              <input type="number" />
            </div>
            <div className="form-item">
              <label className="form-label">is_display_mutiple_devices</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">detect_eqk_time_offset_sec</label>
              <input type="number"></input>
            </div>
            <div className="form-item">
              <label className="form-label">detect_gal_time_offset_sec</label>
              <input type="number" />
            </div>
            <div className="form-item">
              <label className="form-label">is_has_predict_section</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
          </form>
        </header>
        
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
  
}

export default App;
