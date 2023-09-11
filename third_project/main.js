import apiKey from './apikey.js';
const API_KEY = apiKey;

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

window.openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
};

window.closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
};

window.openSearchBox = () => {
    let inputArea = document.getElementById('input-area');
    if (inputArea.style.display === 'inline') {
        inputArea.style.display = 'none';
    }
    else {
        inputArea.style.display = 'inline';
    }
}