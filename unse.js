const express = require('express');
const rq = require('request-promise');
const app = express();
const Slack = require('slack-node');
const port = 3000;

app.get('/', function(req, res){

    const webhookUri = "https://hooks.slack.com/services/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";
    const slack = new Slack();
    slack.setWebhook(webhookUri);

    const options = {
        method: 'GET',
        uri: 'https://m.search.naver.com/p/csearch/dcontent/external_api/json_todayunse_v2.naver?_callback=window.__jindo2_callback._fortune_my_0&gender=m&birth=20020813&solarCal=solar&time=',
        headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
        }
    };

    rq(options)
    .then(function(body){
        
        let GetData = body.replace('window.__jindo2_callback._fortune_my_0(','').replace(');','').replace(/\s([A-z]+)\s?:/g,'"$1":').replace('\n','');      
            
        const jsonData = JSON.parse(GetData);
        
        const title = jsonData.result.day.content[0].keyword.replace(/<([^>]+)>/g, "");
        let viewTable = `
\`\`\`[ Kali의 오늘의 운세 ]\`\`\`
*${title}*
        `;
        for (let index = 0; index < 5; index++) {
            viewTable += `

*======================================== ${jsonData.result.day.content[index].name} ========================================\`\`\`*
\>*\`${jsonData.result.day.content[index].desc}\`*

`;
        }
        slack.webhook({
        channel: "#2019_도제학생방",
        icon_emoji: ":slack:",
        username: "Slack",
        text: viewTable
        }, function(err, response){
            console.log(response);
        });
    
    });
});
app.listen(port, function(){
    console.log('네이버 오늘의 운세');
})