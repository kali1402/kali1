const express = require('express');
const rq = require('request-promise');
const app = express();
const port = 3001;
var Slack = require('slack-node');


app.get('/', function(req,res){

    let options = {
        method: 'GET',
        uri: 'https://m.search.naver.com/p/csearch/dcontent/external_api/json_todayunse_v2.naver?_callback=window.__jindo2_callback._fortune_my_0&gender=m&birth=20020813&solarCal=solar&time=',
        headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
        },
        form: ''
        };

    rq(options)
        .then(function(body){


            webhookUri = "https://hooks.slack.com/services/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";
            
            slack = new Slack();
            slack.setWebhook(webhookUri);            

            const GetData = body.replace('window.__jindo2_callback._fortune_my_0(','').replace('\n','').replace(');','').replace(/\s([A-z]+)\s?:/g,'"$1":');

            const JsonData = JSON.parse(GetData);
            
            res.send(JsonData.result.day.content[0].desc);
            const name = JsonData.result.day.content[0].name;
            const desc = JsonData.result.day.content[0].desc;
            console.log(JsonData.result.day.title);
            console.log("-------------------총운---------------------");
            console.log(JsonData.result.day.content[0].name);
            console.log(JsonData.result.day.content[0].keyword);
            console.log(JsonData.result.day.content[0].desc);
            console.log("-----------------상세정보-------------------");
            console.log(JsonData.result.userData.year);
            console.log(JsonData.result.userData.constellation);
            
            slack.webhook({
                channel: "#2019_도제학생방",
                icon_emoji: ":slack:",
                username: "Slack",
                text: `\`Kali 의  ${name} \`\n\n> ${desc}`
            }, function(err, response) {
                console.log(response);
            });
            
        })
});

app.listen(port, function(){
    console.log('네이버 오늘의 운세');
})