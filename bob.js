const express = require('express');
const rq = require('request-promise');
const cheerio = require('cheerio');
const app = express();
const port = 3000;

app.get('/', function(req,res){

    let options = {
        method: 'GET',
        uri: 'http://www.samil.hs.kr/main.php?menugrp=060401&master=meal2&act=list',
        headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
        },
        // form: {
        //   menugrp:'030300',
        //   master:'meal2',
        //   act:'list',
        //   SearchYear:'2019',
        //   SearchMonth:'05',
        //   SearchDay:'20'
        // },
        // json: false
    };

    rq(options)
        .then(function(body){
            const $ = cheerio.load(body);
            const carriers = $('');
            console.log(body);
            res.send(body);
        });
})

app.listen(port, function(){
    console.log('오늘의 급식');
})