import apiKey from './apikey.js';
const API_KEY = apiKey;

let news = [];
let page = 1;
let total_pages = 0;

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
    try {
        let header = new Headers({'x-api-key': `${API_KEY}`});

        url.searchParams.set('page', page);
        console.log(url);

        let response = await fetch(url, {headers: header});
        let data = await response.json();
    
        if(response.status === 200) {
            if(data.total_hits <= 0) {
                throw new Error("검색된 결과가 없습니다.")
            }
            
            news = data.articles;
            console.log(news);
            
            total_pages = data.total_pages;
            page = data.page;

            render();
            pagination();
            console.log(data);
        }
        else{
            throw new Error(data.message)
        }
    
    }
    catch(error) {
        console.log(error.message);
        errorRender(error.message);
    }

}

const getLatestNews = async()=>{
    url = new URL(
        'https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=20'
    );
    
    getNews();
}

const getNewsByTopic = async(event) => {
    url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${event.target.textContent.toLowerCase()}&page_size=20`
    );

    getNews();
}

window.getNewsBySearch = async() => {
    let searchInput = document.getElementById("search-input").value;

    url = new URL(
        `https://api.newscatcherapi.com/v2/search?q=${searchInput}&countries=KR&page_size=20`
    );

    getNews();
}

window.searchByEnter = (event) => {
    if(event.keyCode === 13) {
        getNewsBySearch();
    }
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

const errorRender = (message) => {
    let errorHTML = `<div class="alert alert-danger text-center" role="alert">
    ${message}
    </div>`
    document.getElementById("news-board").innerHTML = errorHTML;
}

const pagination = () => {
    let paginationHTML = '';
    let pageGroup = Math.ceil(page/5);
    let last = pageGroup * 5;
    let first = last - 4;
    
    paginationHTML = `<li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(${1})">
            <span aria-hidden="true">&laquo;</span></a>
    </li>
    <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(${page-1})">
            <span aria-hidden="true">&lt;</span></a>
    </li>`


    for (let i = first; i <= last; i++) {
        paginationHTML += `<li class="page-item ${page==i?"active":""}"><a class="page-link" href="#" onclick="moveToPage(${i})">${i}</a></li>`
    }


    paginationHTML += `<li class="page-item">
        <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${page+1})">
            <span aria-hidden="true">&gt;</span>
        </a>
    </li>
    <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${total_pages})">
            <span aria-hidden="true">&raquo;</span>
        </a>
    </li>`

    document.querySelector(".pagination").innerHTML = paginationHTML;
}

window.moveToPage = (pageNum) => {
    page = pageNum;

    getNews();
}

getLatestNews();