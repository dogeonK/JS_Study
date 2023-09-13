import apiKey from './apikey.js';
const API_KEY = apiKey;

let news = [];

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

const getLatestNews = async()=>{
    let url = new URL(
        'https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=tech'
    );
    let header = new Headers({'x-api-key': `${API_KEY}`});

    let response = await fetch(url, {headers: header});
    let data = await response.json();

    news = data.articles;
    console.log(news);

    render();
}

const render = () => {
    let newsHTML = ``;
    
    newsHTML = news.map(item => {
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${item.media}" alt="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>
                ${item.summary.slice(0, 201) + "..."}
            </p>
            <div>
                ${item.rights} * ${item.published_date}
            </div>
        </div>
    </div>`
    })

    document.getElementById("news-board").innerHTML = newsHTML.join("");
}

getLatestNews();