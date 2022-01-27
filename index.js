const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
var upload = multer({ dest: 'uploads/' })
const csv = require('csv-parser');
const cors = require('cors');

const staticPath = path.join(__dirname, '/front-end/build');
console.log(staticPath)
app.use(express.static(staticPath));



app.use(cors());
app.options('*', cors())



// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin , X-Requested-With , Content-Type , Accept");
//     res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE,PUT");
// })


app.post('/hello', upload.array('file'), async (req, res, next) => {
    console.log('i got req')
    console.log(req.files);
    if (req.files === [] || req.files.length < 2) {
        res.sendStatus(450);
        return;
    }
    let old_data = [];
    let new_data = [];

    var csvPipe1 = await fs.createReadStream(req.files[0].path).pipe(csv());
    var csvPipe2 = await fs.createReadStream(req.files[1].path).pipe(csv());



    for await (let row of csvPipe1) {
        await old_data.push(row["Cell Number"]);
        // console.log(row)
    }
    for await (let row of csvPipe2) {
        await new_data.push(row["Cell Number"]);
        // console.log(row)
    }

    const filteredArray = await old_data.filter(value => new_data.includes(value));
    let difference = await new_data.filter(x => !filteredArray.includes(x));

    // let l1 = old_data.length;
    // let l2 = new_data.length;

    // console.log(l1, l2)
    // console.log(difference);

    // let arr = myarr1.concat(myarr2);

    res.send(difference);

})

app.get('/', (req, res) => {
    res.send("ojk");
})

if (process.env.PRODUCTION === "production") {
    app.use(express.static("front-end/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'));
    })
}

app.listen(port, () => {
    console.log('app running server started');
})




