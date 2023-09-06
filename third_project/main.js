import config from './apikey.js';
const API_KEY = config.apiKey;

let news = [];

const getLatestNews = async()=>{
    let url = new URL(
        'https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=tech'
    );
    let header = new Headers({'x-api-key': `${API_KEY}`});

    let response = await fetch(url, {headers: header});
    let data = await response.json();

    news = data.articles;
    console.log(news);
}

getLatestNews();