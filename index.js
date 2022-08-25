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

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const staticPath = path.join(__dirname, '/front-end/build');
console.log(staticPath)
app.use(express.static(staticPath));



app.use(cors());
app.options('*', cors());



let json_data1 = {
    "newUsers": [
        {
            "userName": "Shivam 123",
            "email": "pandyaksbm@gmail.com"
        }
    ]
}

let json_data2 = {
    "newUsers": [
        {
            "userName": "shivam123",
            "email": "pandyaksbm@gmail.com"
        }
    ]
}

let json_data3 = {
    "name": "Shivam P1",
    "email": "summerprojects7781@gmail.com"
}

const allEqual = async (arr) => arr.every(v => v === arr[0])

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


const isPalindrome = (num) => {
    let str = num.toString();
    if (str.length < 10) {
        return 0;
    }

    if (str[9] === str[0] && str[8] === str[1] && str[7] === str[2] && str[6] === str[3] && str[5] === str[4] && str[4] === str[5]) {
        return 1;
    }

    return 0;

}


const findPattern = (num) => {
    let str = num.toString();

    if (str.length < 10) {
        return null;
    }
    let obj = {};
    obj.xxxx = false;
    obj.ab_xyxy_xzxz = false;

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

    //abxy0000xy
    if(str[2] === str[8] && str[3] === str[9]  && str[4] === '0' && str[5] === '0' && str[6] === '0' && str[7] === '0') {
        obj.abxy0000xy = true
    }
    //abc000bcbc
    if(str[3] === '0' && str[4] === '0' && str[5] === '0' && str[1] === str[6] && str[6] === str[8] && str[7] === str[9] && str[9] === str[2]) {
        obj.abc000bcbc = true
    }
    //aabbcccxcx
    if(str[0] === str[1] && str[2] === str[3] && str[4] === str[5] && str[5] === str[6] && str[6] === str[8] && str[7] === str[9]) {
        obj.aabbcccxcx = true
    }
    //aabbaaxyxy
    if(str[0] === str[1] && str[1] === str[4] && str[4] === str[5] && str[2] === str[3] && str[6] === str[8] && str[7] === str[9]) {
        obj.aabbaaxyxy = true
    }
    //axyxyacdcd
    if(str[0] === str[5] && str[1] === str[3] && str[2] === str[4] && str[6] === str[8] && str[7] === str[9] ) {
        obj.axyxyacdcd = true
    }
    //abcd1abcd2
    if(str[9] === str[4] + 1 && str[0] === str[5] && str[1] === str[6] && str[2] === str[7] && str[3] === str[8] && str[4] === str[9]) {
        obj.abcd1abcd2 = true
    }
    //abxy00xyxy
    if(str[6] === str[8] && str[7] === str[9] &&str[9] === str[3] && str[2] === str[8] && str[4] === '0' && str[5] === '0' ) {
        obj.abxy00xyxy = true
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

    if (str[2] === str[3] && str[3] === str[4] && str[4] === str[7] && str[7] === str[8] && str[8] === str[9]) {
        obj.ab_xxx_cd_xxx = true;
    }
    else {
        obj.ab_xxx_cd_xxx = false;
    }

    if (str[2] === str[4] && str[4] === str[6] && str[6] === str[8] && str[3] === str[7] && str[5] === str[9] && parseInt(str[5]) === parseInt(str[3]) + 1) {
        obj.ab_xyxz_xyxz = true;
    }
    else {
        obj.ab_xyxz_xyxz = false;
    }

    if (str[2] === str[6] && str[3] === str[7] && str[4] === str[8] && str[5] === str[9] && parseInt(str.substring(2, 4)) === parseInt(str.substring(4, 6)) - 1) {
        obj.ab_xyxz_xyxz = true;
    }
    else {
        obj.ab_xyxz_xyxz = false;
    }

    if (str.substring(2, 4) === str.substring(4, 6) && str.substring(6, 8) === str.substring(8, 10) && parseInt(str.substring(4, 6)) === parseInt(str.substring(8, 10)) - 1) {
        obj.ab_xyxy_xzxz = true;
    }
    else if (str.substring(2, 4) === str.substring(4, 6) && str.substring(6, 8) === str.substring(8, 10) && parseInt(str.substring(4, 6)) === parseInt(str.substring(8, 10)) + 1) {
        obj.ab_xyxy_xzxz = true;
    }

    if (str[4] === str[7] && str[5] === str[8] && str[6] === str[9]) {
        obj.abcd_xyz_xyz = true;
    }
    else {
        obj.abcd_xyz_xyz = false;
    }

    if (str[0] == str[2] && str[1] == str[3] && str[5] == str[7] && str[6] == str[8] && str[0] == str[5] && str[1] == str[6]) {
        obj.ababdababe = true;
    }
    else {
        obj.ababdababe = false;
    }

    return obj;

}

const isNewCateg1 = (num) => {
    let s = num.toString();

    // 000xyxy

    // if (s[9] === s[7] && s[8] === s[6] && s[5] === s[4] && s[4] === s[3] && s[3] === '0') {
    //     return true;
    // }





    if (s.substring(0, 3) === s.substring(7, 10) && s[3] === s[4] && s[5] === s[4] && s[5] === s[6]) {
        return true;

    }

    if (s.substring(0, 2) === s.substring(8, 10) && s.substring(2, 5) === s.substring(5, 8)) {
        return true;
    }

    if (s[2] === s[4] && s[3] === s[5] && s[4] === s[6] && s[5] === s[7]) {
        return true;
    }

    if (s.substring(0, 5) === s.substring(5, 10)) {
        return true;
    }

    let str = s.substring(4, 10);

    let endswith = ['001313', '000420', '000143', '000786', '123123', '143143', '302302', '786786', '420420', '101101', '100100', '313313', '501501', '108108', '214214', '306090', '102030', '008055', '010203', '307307', '111111', '222222', '333333', '444444', '123456', '555555', '666666', '777777', '888888', '999999', '420786', '143786'];

    let random = ['420420', '143143', '0001313', '123123', '786786', '92119211', '0009211'];

    if (s.search('0001010') !== -1) {
        return true;
    }

    for (const nnnn of endswith) {
        if (str === nnnn) {
            return true;
        }
    }

    for (const nnnnn of random) {
        if (s.search(nnnnn) !== -1) {
            return true;
        }
    }

    return false;


}


app.get('/data1', (req, res) => {
    res.send(json_data1);
})

app.get('/data2', (req, res) => {
    res.send(json_data2);
})

app.get('/data3', (req, res) => {
    res.send(json_data3);
})





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

app.post('/searchdesign', async (req, res) => {

    let data = req.body;

    // console.log(data, "i am data");

    let result = req.body.arr;
    let pattern = req.body.search;
    // console.log(pattern);

    let patternLength = pattern.length;

    let patternObj = {};
    let temp_index = 0;

    for await (let items of pattern) {
        if (patternObj[items] === undefined) {
            patternObj[items] = [];
        }
        patternObj[items].push(temp_index);
        temp_index += 1;
    }

    // console.log(patternObj)

    let myarr = [];
    let dumb = [];
    let curr_index = 1;


    for await (let d of result) {

        if (d === undefined || d === null) {
            continue;
        }
        let strNumber = await d.toString();
        let subStr = "";



        for await (let digit of strNumber) {
            let flag = true;
            if (subStr.length === patternLength) {
                let newSubStr = await subStr.slice(1);
                subStr = newSubStr;
            }

            subStr += digit;

            if (subStr.length < patternLength) {
                continue;
            }

            // dumb.push(subStr);

            for await (let key of Object.keys(patternObj)) {
                let temp = [];
                for await (let g of patternObj[key]) {
                    await temp.push(subStr[g]);
                }
                if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {
                    await temp.push(key);
                }

                if (await allEqual(temp) === false) {
                    flag = false;
                    // dumb.push(temp);
                    break;
                }


            }

            if (flag === true) {
                let object1 = {};
                object1.id = curr_index;
                object1.Number = d;
                await myarr.push(object1);
                curr_index += 1;
            }

        }



    }

    if (myarr.length === 0) {
        let object1 = {};
        object1.id = curr_index;
        object1.Number = 'No numbers found';
        await myarr.push(object1);
    }

    // console.log(myarr, curr_index, result.length, dumb.length, "hii bro");
    // console.log(dumb);

    res.send(myarr)

})

app.post('/pattern', upload.array('file'), async (req, res, next) => {



    if (req.files === [] || req.files.length < 1) {
        console.log(' i  am parent eror')
        res.sendStatus(450);
        return;
    }

    let allnumbers = [];

    try {
        var a3 = await req.files[0].buffer.toString();

    }
    catch (e) {
        console.log('i am here')
        res.sendStatus(450);
        return;
    }

    // console.log(a3)

    let c = await a3.split('\n');
    let pattern = /\d{10}/g;
    let result = await a3.match(pattern);
    // console.log(result);

    // for await (let d of c) {
    //     let appu = await d.split(',');
    //     let num = await appu[0];
    //     let t = parseInt(num);
    //     allnumbers.push(t);

    // }

    // await allnumbers.sort();

    // res.send(allnumbers);


    res.send(result);
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
    let abcd_xyz_xyz = [];

    let super_vip = [];
    let new_categ1 = [];

    let ababdababe = [];




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

            if (pattern.xy00_xb00 || pattern.xy00_xa00 || pattern.xxx_z_xxx || pattern.ab_xy_xy_ab_ab || pattern.ab_xy_ab_xy_xy || pattern.ab_zxxx_zaaa || pattern.xy00_xy00 || pattern.xyxy_yxyx || pattern.xxxxyxx || pattern.x00y_x00y || pattern.ab_xxx_cd_xxx || isPalindrome(t) || pattern.ab_xyxz_xyxz || pattern.ab_xyxy_xzxz || pattern.ababdababe || pattern.abxy0000xy || pattern.abc000bcbc || pattern.aabbcccxcx || pattern.aabbaaxyxy || pattern.axyxyacdcd || pattern.abcd1abcd2 || pattern.abxy00xyxy ) {
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

            if (pattern.abcd_xyz_xyz) {
                abcd_xyz_xyz.push(t);
            }


            if (isNewCateg1(t) === true) {
                new_categ1.push(t)
            }

            if (pattern.ababdababe) {
                ababdababe.push(t);
            }

        }




    }

    await super_vip.sort();
    await xxxx.sort();
    await x00x_y00y.sort();
    await abcd_abcd.sort();
    await nine.sort();
    await mxthree.sort();
    await mxfreq6.sort();
    await abcd_x_abcd_y.sort();
    await xy_abba_abba.sort();
    await abcc_x_abcc_y.sort();
    await abc_xx_abc_yy.sort();
    await xy_a0_b0_c0_d0.sort();
    await xy_abab_cdcd.sort();
    await abc_abc_wxyz.sort();
    await abcd_xyz_xyz.sort();
    await new_categ1.sort();




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
    data.push(abcd_xyz_xyz);
    data.push(new_categ1);



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




