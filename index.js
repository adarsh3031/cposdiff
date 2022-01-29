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
app.options('*', cors());


const sumDigit = async (num, sum = 0) => {

    var resad = 0;
    while (num > 0) {
        let k = num % 10;
        resad += k;
        num = Math.floor(num / 10);

    }


    return resad

};

const maximumDigits = async (num) => {
    let mySet = new Set();

    while (num > 0) {
        let k = num % 10;
        num = Math.floor(num / 10);
        mySet.add(k);
    }

    return mySet.size;

}

const maximumFreq = async (num) => {

    var hash = new Map();
    let arr = [];

    while (num > 0) {
        let k = num % 10;
        num = Math.floor(num / 10);
        arr.push(k);
    }
    let n = arr.length;

    for (var i = 0; i < n; i++) {
        if (hash.has(arr[i]))
            hash.set(arr[i], hash.get(arr[i]) + 1)
        else
            hash.set(arr[i], 1)
    }


    var max_count = 0, res = -1;
    hash.forEach((value, key) => {

        if (max_count < value) {
            res = key;
            max_count = value;
        }

    });

    return max_count;
}


const findPattern = (num) => {
    let str = num.toString();

    if (str.length < 10) {
        return null;
    }
    let obj = {};
    obj.xxxx = false;

    if (str[0] === str[5] && str[1] === str[6] && str[2] === str[7] && str[3] === str[8]) {
        obj.abcd_x_abcd_y = true;
    }
    else {
        obj.abcd_x_abcd_y = false;
    }

    if (str[2] === str[6] && str[3] === str[7] && str[4] === str[8] && str[5] === str[9] && str[3] === str[4]) {
        obj.xy_abba_abba = true;
    }
    else {
        obj.xy_abba_abba = false;
    }

    if (str[0] === str[5] && str[1] === str[6] && str[2] === str[7] && str[3] === str[8] && str[2] === str[3]) {
        obj.abcc_x_abcc_y = true;
    }
    else {
        obj.abcc_x_abcc_y = false;
    }

    if (str[0] === str[5] && str[1] === str[6] && str[2] === str[7] && str[3] === str[4] && str[8] === str[9]) {
        obj.abc_xx_abc__yy = true;
    }
    else {
        obj.abc_xx_abc__yy = false;
    }

    if (str[3] === '0' && str[5] === '0' && str[7] === '0' && str[9] === '0') {
        obj.xy_a0_b0_c0_d0 = true;
    }
    else {
        obj.xy_a0_b0_c0_d0 = false;
    }

    if (str[2] === str[4] && str[3] === str[5] && str[6] === str[8] && str[7] === str[9]) {
        obj.xy_abab_cdcd = true;
    }
    else {
        obj.xy_abab_cdcd = false;
    }

    if (str[0] === str[3] && str[1] === str[4] && str[2] === str[5]) {
        obj.abc_abc_wxyz = true;
    }
    else {
        obj.abc_abc_wxyz = false;
    }


    if (str[9] === str[8] && str[8] === str[7] && str[7] === str[5] && str[5] === str[4] && str[4] === str[3]) {
        obj.xxx_z_xxx = true;

    }
    else if (str[0] === str[1] && str[1] === str[2] && str[2] === str[4] && str[4] === str[5] && str[5] === str[6]) {
        obj.xxx_z_xxx = true;

    }
    else {
        obj.xxx_z_xxx = false
    }

    if (str[0] === str[6] && str[1] === str[7] && str[7] === str[9] && str[0] === str[8] && str[2] === str[4] && str[3] === str[5]) {
        obj.ab_xy_xy_ab_ab = true;
    }
    else {
        obj.ab_xy_xy_ab_ab = false;
    }

    if (str[0] === str[4] && str[1] === str[5] && str[2] === str[6] && str[6] === str[8] && str[3] === str[9] && str[9] === str[7]) {
        obj.ab_xy_ab_xy_xy = true;
    }
    else {
        obj.ab_xy_ab_xy_xy = false;
    }


    if (str[0] === str[7] && str[7] === str[8] && str[8] === str[9] && str[2] === str[6] && str[3] === str[4] && str[4] === str[5]) {
        obj.ab_zxxx_zaaa = true;
    }
    else {
        obj.ab_zxxx_zaaa = false;
    }

    if (str[2] === str[6] && str[3] === str[7] && str[4] === str[5] && str[5] === str[8] && str[8] === str[9] && str[9] === '0') {
        obj.xy00_xy00 = true;
    }
    else if (str[0] === str[4] && str[1] === str[5] && str[2] === str[3] && str[3] === str[6] && str[6] === str[7] && str[7] === '0') {
        obj.xy00_xy00 = true;
    }
    else {
        obj.xy00_xy00 = false;
    }



    if (str[2] === str[6] && (parseInt(str[3]) === parseInt(str[7]) + 1) && str[4] === str[5] && str[5] === str[8] && str[8] === str[9] && str[9] === '0') {
        obj.xy00_xa00 = true;
    }
    else if (str[0] === str[4] && (parseInt(str[1]) === parseInt(str[5]) + 1) && str[2] === str[3] && str[3] === str[6] && str[6] === str[7] && str[7] === '0') {
        obj.xy00_xa00 = true;
    }
    else {
        obj.xy00_xa00 = false;
    }

    if (str[2] === str[6] && (parseInt(str[3]) + 1 === parseInt(str[7])) && str[4] === str[5] && str[5] === str[8] && str[8] === str[9] && str[9] === '0') {
        obj.xy00_xb00 = true;
    }
    else if (str[0] === str[4] && (parseInt(str[1]) + 1 === parseInt(str[5])) && str[2] === str[3] && str[3] === str[6] && str[6] === str[7] && str[7] === '0') {
        obj.xy00_xb00 = true;
    }
    else {
        obj.xy00_xb00 = false;
    }


    if (str[2] === str[4] && str[4] === str[7] && str[7] === str[9] && str[3] === str[5] && str[5] === str[6] && str[6] === str[8]) {
        obj.xyxy_yxyx = true;
    }
    else {
        obj.xyxy_yxyx = false;
    }

    if (str[9] === str[8] && str[8] === str[6] && str[3] === str[4] && str[4] === str[5] && str[5] === str[6]) {
        obj.xxxxyxx = true;
    }
    else if (str[8] === str[7] && str[7] === str[2] && str[2] === str[3] && str[3] === str[4] && str[4] === str[5]) {
        obj.xyxy_yxyx = true;
    }
    else {
        obj.xyxy_yxyx = false;
    }

    for (let i = 0; i <= 6; i++) {

        if (str[i] === str[i + 1] && str[i + 1] === str[i + 2] && str[i + 2] === str[i + 3]) {
            obj.xxxx = true;
        }
    }

    if (str[2] === str[6] && str[3] === str[7] && str[4] === str[8] && str[5] === str[9]) {
        obj.abcd_abcd = true;
    }
    else {
        obj.abcd_abcd = false;
    }

    if (str[2] === str[5] && str[3] === '0' && str[4] === '0' && str[7] === '0' && str[8] === '0' && str[6] === str[9]) {
        obj.x00x_y00y = true;
    }
    else {
        obj.x00x_y00y = false;
    }


    if (str[2] === str[6] && str[3] === '0' && str[4] === '0' && str[4] === str[8] && str[7] === '0' && str[8] === '0' && str[5] === str[9]) {
        obj.x00y_x00y = true;
    }
    else {
        obj.x00y_x00y = false;
    }









    return obj;







}





app.post('/hello', upload.array('file'), async (req, res, next) => {
    console.log('i got req')
    console.log(req.files);
    if (req.files === [] || req.files.length < 2) {
        res.sendStatus(450);
        return;
    }

    let old_data = [];
    let new_data = [];

    try {

        var a = await req.files[0].buffer.toString();
        var b = await req.files[1].buffer.toString();

    }
    catch (e) {
        res.sendStatus(450);
        return;
    }




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

    res.send(difference);

})


app.post('/vip', upload.array('file'), async (req, res, next) => {

    console.log('i got req')

    console.log(req.files);

    if (req.files === [] || req.files.length < 1) {
        res.sendStatus(450);
        return;
    }

    let data = []
    try {
        var a1 = await req.files[0].buffer.toString();

    }
    catch (e) {
        res.sendStatus(450);
        return;
    }



    let c = await a1.split('\n');
    let nine = [];
    let mxthree = [];
    let mxtwo = [];
    let mxfreq6 = [];
    let mxfreq7 = [];
    let abcd_x_abcd_y = [];
    let xy_abba_abba = [];
    let abcc_x_abcc_y = [];
    let abc_xx_abc_yy = [];
    let xy_a0_b0_c0_d0 = [];
    let xy_abab_cdcd = [];
    let abc_abc_wxyz = [];
    let xxxx = [];
    let abcd_abcd = [];
    let x00x_y00y = [];

    let super_vip = [];




    for await (let d of c) {
        let appu = await d.split(',');
        let num = await appu[0];
        let t = parseInt(num);

        let ans1 = await sumDigit(t);
        let ans2 = await maximumDigits(t);
        let ans3 = await maximumFreq(t);
        let pattern = await findPattern(t);

        if ((ans1 % 9) === 0) {

            let count1 = 0;
            let nnn = t;
            while (nnn > 0) {
                let kk = nnn % 10;
                nnn = Math.floor(nnn / 10);
                if (kk === 9) {
                    count1 += 1;
                }
            }


            if (count1 >= 6) {
                nine.push(t);
            }


        }

        if (ans2 <= 2) {
            super_vip.push(t);

        }

        if (ans2 === 3) {
            mxthree.push(t);

        }

        if (ans3 >= 6) {
            mxfreq6.push(t);
        }

        if (ans3 >= 7) {
            super_vip.push(t);
        }

        if (pattern !== null) {

            if (pattern.abcd_x_abcd_y) {
                abcd_x_abcd_y.push(t);
            }

            if (pattern.xy_abba_abba) {
                xy_abba_abba.push(t);
            }

            if (pattern.abcc_x_abcc_y) {
                abcc_x_abcc_y.push(t);
            }

            if (pattern.abc_xx_abc__yy) {
                abc_xx_abc_yy.push(t);
            }


            if (pattern.xy_a0_b0_c0_d0) {
                xy_a0_b0_c0_d0.push(t);
            }

            if (pattern.xy_abab_cdcd) {
                xy_abab_cdcd.push(t);
            }

            if (pattern.abc_abc_wxyz) {
                abc_abc_wxyz.push(t);
            }

            if (pattern.xxx_z_xxx) {
                super_vip.push(t);
            }

            if (pattern.xy00_xb00 || pattern.xy00_xa00 || pattern.xxx_z_xxx || pattern.ab_xy_xy_ab_ab || pattern.ab_xy_ab_xy_xy || pattern.ab_zxxx_zaaa || pattern.xy00_xy00 || pattern.xyxy_yxyx || pattern.xxxxyxx || pattern.x00y_x00y) {
                super_vip.push(t);
            }

            if (pattern.xxxx) {
                xxxx.push(t);
            }

            if (pattern.abcd_abcd) {
                abcd_abcd.push(t);
            }

            if (pattern.x00x_y00y) {
                x00x_y00y.push(t);
            }




        }




    }


    data.push(super_vip);


    data.push(xxxx);
    data.push(x00x_y00y);
    data.push(abcd_abcd);

    data.push(nine);

    data.push(mxthree);
    data.push(mxfreq6);

    data.push(abcd_x_abcd_y);
    data.push(xy_abba_abba);
    data.push(abcc_x_abcc_y);
    data.push(abc_xx_abc_yy);
    data.push(xy_a0_b0_c0_d0);
    data.push(xy_abab_cdcd);
    data.push(abc_abc_wxyz);


    res.send(data);

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




