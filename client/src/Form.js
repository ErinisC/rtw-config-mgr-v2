import {useState} from 'react';
import React from 'react';
import ToggleButton from './ToggleButton';

const Form = ()=> {
    const [inputs, setInputs] = useState({
        apiServerIp:"",
        apiServerPort:"",
        displayAnnounceNum:"",
        langSelect:"",
        showEqReportPeriodMs:"",
        countdownStopEqViewMs:"",
        detectEqkTimeOffsetSec:"",
        detectGalTimesetSec:""
    });

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }

    return(
        <form 
            action="http://127.0.0.1:3001/get_json" 
            method="GET"
            className="form-style" 
            onSubmit={handleSubmit}>
            <div className="form-item">
              <label className="form-label">is_fullscreen</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">api_server_ip</label>
              <input  
                name="apiServerIp"
                type="text" 
                value={inputs.apiServerIp} 
                onChange={handleChange}/>
            </div>
            <div className="form-item">
              <label className="form-label">api_server_port</label>
              <input
                name="apiServerPort" 
                type="number" 
                value={inputs.apiServerPort}
                onChange={handleChange}/>
            </div>
            <div className="form-item">
              <label className="form-label">api_is_secure</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">is_hide_cursor</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">display_announce_num</label>
              <input 
                name="displayAnnounceNum" 
                type="number"
                value={inputs.displayAnnounceNum} 
                onChange={handleChange}/>
            </div>
            <div className="form-item">
              <label className="form-label">lang_select</label>
              <select 
                className="langSelect"
                name="langSelect" 
                type="text"
                value={inputs.langSelect}
                onChange={handleChange} >
                <option value="ZH_TW">ZH_TW</option>
                <option value="EN_US">EN_US</option>
              </select>
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
              <input 
                name="showEqReportPeriodMs" 
                type="number"
                value={inputs.showEqReportPeriodMs}
                onChange={handleChange} />
            </div>
            <div className="form-item">
              <label className="form-label">is_show_annoucement</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">countdown_stop_eq_view_ms</label>
              <input 
                name="countdownStopEqViewMs" 
                type="number" 
                value={inputs.countdownStopEqViewMs}
                onChange={handleChange} />
            </div>
            <div className="form-item">
              <label className="form-label">is_display_mutiple_devices</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <div className="form-item">
              <label className="form-label">detect_eqk_time_offset_sec</label>
              <input 
                name="detectEqkTimeOffsetSec" 
                type="number" 
                value={inputs.detectEqkTimeOffsetSec}
                onChange={handleChange} />
            </div>
            <div className="form-item">
              <label className="form-label">detect_gal_time_offset_sec</label>
              <input 
                name="detectGalTimesetSec" 
                type="number" 
                value={inputs.detectGalTimesetSec}
                onChange={handleChange} />
            </div>
            <div className="form-item">
              <label className="form-label">is_has_predict_section</label>
              <ToggleButton onChange={state => console.log(state)} />
            </div>
            <button 
                id="submitBtn" 
                className="submitBtn" 
                type="submit">Submit</button>
        </form>
    )
}

export default Form;