import apiKey from './apikey.js';
const API_KEY = apiKey;

let news = [];

let menus = document.querySelectorAll(".menus button");
menus.forEach(menu => menu.addEventListener("click", (event) => {
    getNewsByTopic(event);
}))

let sideMenus = document.querySelectorAll(".side-menu-list button");
sideMenus.forEach(sideMenus => sideMenus.addEventListener("click", (event) => {
    getNewsByTopic(event);
}))

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

let url;

const getNews = async() => {
    let header = new Headers({'x-api-key': `${API_KEY}`});

    let response = await fetch(url, {headers: header});
    let data = await response.json();

    news = data.articles;
    console.log(news);

    render();
}

const getLatestNews = async()=>{
    url = new URL(
        'https://api.newscatcherapi.com/v2/latest_headlines?countries=KR'
    );
    
    getNews();
}

const getNewsByTopic = async(event) => {
    url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${event.target.textContent.toLowerCase()}`
    );

    getNews();
}

window.getNewsBySearch = async() => {
    let searchInput = document.getElementById("search-input").value;

    url = new URL(
        `https://api.newscatcherapi.com/v2/search?q=${searchInput}&countries=KR&page_size=1`
    );

    getNews();
}

const render = () => {
    let newsHTML = ``;
    
    newsHTML = news.map(item => {
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${item.media || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"}" alt="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>
                ${
                    item.summary == null || item.summary == "" ? "내용 없음" : item.summary.length > 200 ? item.summary.slice(0, 200) + "..." : item.summary
                }
            </p>
            <div>
                ${item.rights || "no source"} / ${moment(item.published_date).fromNow()}
            </div>
        </div>
    </div>`
    })

    document.getElementById("news-board").innerHTML = newsHTML.join("");
}

getLatestNews();