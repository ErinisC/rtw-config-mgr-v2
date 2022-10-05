let express = require('express');
let app = express();
let port = process.env.PORT || 3001;
let cors = require('cors');
let path = require('path');
let fs = require('fs');


app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(cors());

app.get('/get_json', (req, res)=>{
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

// 建立 Router 物件
var router = express.Router();

// 首頁路由 ( http://localhost:3000 )
router.get('/', function(req, res){
    let jsonData = {};
    try {
        let data = fs.readFileSync('./foo.json', 'utf8')
        if (data.length === 0) {
            data = {};
        };
        jsonData = JSON.parse(data)
        console.log(jsonData);
    } catch (error) {
        console.log('error', err);
    }
    res.json(jsonData);
});

router.get('/', function(req,res){
    res.sendFile(path.normalize(__dirname + "/" + "index.html"))
})

router.post('/get_json', function(req, res){
    var response = {
        'apiServerIp': req.body.apiServerIp,
        'apiServerPort': req.body.apiServerPort,
        'displayAnnounceNum': req.body.displayAnnounceNum,
        'langSelect': req.body.langSelect,
        'showEqReportPeriodMs': req.body.showEqReportPeriodMs,
        'countdownStopEqViewMs': req.body.countdownStopEqViewMs,
        'detectEqkTimeOffsetSec': req.body.detectEqkTimeOffsetSec,
        'detectGalTimesetSec': req.body.detectGalTimesetSec
    }
    var strRes = JSON.stringify(response);
    res.end(strRes);

    fs.writeFileSync('foo.json', strRes, err => {
        if (err) {
            console.log('err: ', err);
        }else{
            console.log(response);
        }
    });
});


// 將路由套用至應用程式
app.use('/', router);

app.listen(port, ()=> console.log(`Listening on port ${port}`));

