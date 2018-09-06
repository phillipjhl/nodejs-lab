const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

let dataPath = path.join(__dirname, '/popular-articles.json');

rp('https://www.reddit.com/r/popular.json')
    .then(body => {
        let articles = JSON.parse(body).data.children.map(article => {
            let item = {
                title: article.data.title,
                author: article.data.author,
                url: article.data.url
            };
            return item;
        });
        return articles;
    })
    .then(articles => {
        fs.writeFileSync(dataPath, JSON.stringify(articles));
    })
    .catch(err => console.log(err));