const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
var upload = multer()
const csv = require('csv-parser');
const cors = require('cors');

const staticPath = path.join(__dirname, '/front-end/build');
console.log(staticPath)
app.use(express.static(staticPath));



app.use(cors());
app.options('*', cors())




app.post('/hello', upload.array('file'), async (req, res, next) => {
    console.log('i got req')
    console.log(req.files);
    if (req.files === [] || req.files.length < 2) {
        res.sendStatus(450);
        return;
    }

    let old_data = [];
    let new_data = [];

    let a = await req.files[0].buffer.toString();
    let b = await req.files[1].buffer.toString();
    let c = await a.split('\n');
    let c2 = await b.split('\n');

    for await (let d of c) {
        let appu = await d.split(',');
        let num = await appu[0];
        old_data.push(parseInt(num));
    }

    for await (let d of c2) {
        let appu = await d.split(',');
        let num = await appu[0];
        new_data.push(parseInt(num));
    }

    // console.log(typeof (a));

    // console.log(a, b, c);

    // var matches1 = await a.match('/^\d{10}$/');
    // var matches2 = await b.match('/^\d{10}$/');

    // console.log(matches1, matches2);





    // var csvPipe1 = await fs.createReadStream(req.files[0].path).pipe(csv());
    // var csvPipe2 = await fs.createReadStream(req.files[1].path).pipe(csv());



    // for await (let row of csvPipe1) {
    //     await old_data.push(row["Cell Number"]);
    //     // console.log(row)
    // }
    // for await (let row of csvPipe2) {
    //     await new_data.push(row["Cell Number"]);
    //     // console.log(row)
    // }

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




