const API_KEY = config.apiKey;

const getLatestNews = ()=>{
    let url = new URL(
        'https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=tech'
    );
    let header = new Headers({'x-api-key': `${API_KEY}`});

    let response = fetch(url, {headers: header});
}