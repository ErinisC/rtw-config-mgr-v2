var express = require('express');
var router = express.Router();

var http = new XMLHttpRequest();

async function async(){
  const url = "http://127.0.0.1:3001/get_json";
  const response = await fetch(url, {
      body: JSON.stringify(),
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET'
  });
  let responseJson = await response.json()
  var elemApiServerId = document.getElementById("apiServerId");
  elemApiServerId.value = responseJson.api_server_ip;
  var eleDisplayAnnouceNum = document.getElementById("displayAnnouceNum");
  eleDisplayAnnouceNum.value = responseJson.display_announce_num;
  var elemLangSelect = document.getElementById("langSelect");
  elemLangSelect.value = responseJson.lang_select;
  var elemLangSelectTw = document.getElementById("langSelectTw");
  elemLangSelectTw.value = responseJson._lang_select_TW;
  var elemLangSelectUs = document.getElementById("langSelectUs");
  elemLangSelectUs.value = responseJson._lang_select_US;
  var elemShowEqReportPeriodMs = document.getElementById("showEqReportPeriodMs");
  elemShowEqReportPeriodMs.value = responseJson.show_eq_report_period_ms;
  var elemCountdownStopEqViewMs = document.getElementById("countdownStopEqViewMs");
  elemCountdownStopEqViewMs.value = responseJson.countdown_stop_eq_view_ms;
  var elemDetectEqkTimeOffsetSec = document.getElementById("detectEqkTimeOffsetSec");
  elemDetectEqkTimeOffsetSec.value = responseJson.detect_eqk_time_offset_sec;
  var elemDetectGalTimeOffsetSec = document.getElementById("detectGalTimeOffsetSec");
  elemDetectGalTimeOffsetSec.value = responseJson.detect_gal_time_offset_sec;

  console.log(responseJson)
};

document.addEventListener("DOMContentLoaded", function(event) { 
  async();
});

function formSubmit(){
  document.getElementById("formSubmit").submit();
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
