const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp('https://www.reddit.com/r/popular.json')
    .then(body => {
        //taking the JSON, parsing it, then looping over each object in children array
        JSON.parse(body).data.children.forEach(article => {
            //if the url file extension is a jpg or a gifv, write it to a file named it's id
            if (path.extname(article.data.url) === '.jpg') {
                let media = article.data.url;
                fs.writeFileSync(`${__dirname}/downloads/${article.data.id}`, JSON.stringify(media));
            } else if (path.extname(article.data.url) === '.gifv') {
                let media = article.data.url;
                fs.writeFileSync(`${__dirname}/downloads/${article.data.id}`, JSON.stringify(media));
            } else console.log('not media');
        });
    })
    .catch(err => console.log(err));