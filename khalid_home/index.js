
let key = `0a3107f541194a9e9b886bdcbbb671d0`

let topHeadlines = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`

let displayData = (data) => {
    const nationalFeatures = document.querySelector('#nationalFeatures');
    data.forEach((elem) => {

        const nfDiv1 = document.querySelector('#nfDiv1');
        const nfDiv1Img = document.querySelector('#nfDiv1Img');
        const nfDiv1SideHeading = document.querySelector('#nfDiv1SideHeading');
        const nfDiv1Content = document.querySelector('#nfDiv1Content');
        const nfDiv1PublishedBy = document.querySelector('#nfDiv1PublishedBy');
        const nfDiv1Description = document.querySelector('#nfDiv1Description');

        nfDiv1Img.src = elem.urlToImage;
        nfDiv1SideHeading.innerText = elem.title;
        nfDiv1Content.innerText = elem.content;
        nfDiv1PublishedBy.innerText = `${source.name} | ${elem.publishedAt}`;
        nfDiv1Description.innerText = elem.description;

    })
}


fetch(topHeadlines).then((res) => {
    return res.json()
}).then((res) => {
    console.log(res.articles)
    displayData(res.articles)
}).catch((err) => {
    console.log(err)
});




// author: "FP Staff"
// content: "Presidential elections 2022 results: Murmu defeated joint Opposition candidate Yashwant Sinha to become the 15th president of India. She will succeed Ram Nath Kovind whose term ends on 24 July\r\n Pres… [+3901 chars]"
// description: "Presidential elections 2022 results: Murmu defeated joint Opposition candidate Yashwant Sinha to become the 15th president of India. She will succeed Ram Nath Kovind whose term ends on 24 July"
// publishedAt: "2022-07-21T14:28:45Z"
// source:
// id: null
// name: "Firstpost"
// [[Prototype]]: Object
// title: "Presidential elections 2022 results LIVE: Murmu surges ahead of Sinha after first round of counting - Firstpost"
// url: "https://www.firstpost.com/india/presidential-poll-2022-results-live-murmu-crosses-majority-mark-set-to-become-indias-first-tribal-woman-president-10935781.html"
// urlToImage: