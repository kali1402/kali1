const express = require('express');
const rq = require('request-promise');
const cheerio = require('cheerio');
const app = express();
const port = 3000;

app.get('/', function(req,res){

const options = {
    method: 'get',
    uri: 'http://www.samil.hs.kr/main.php'
};

    rq(options)
        .then(function(body){
            const $ = cheerio.load(body);
            // const carriers = $('div#meal_content col-md-7 div#meal_table table caption#visible tbody tr td');
            res.send(body);
        });
})

app.listen(port, function(){
    console.log('오늘의 급식');
})