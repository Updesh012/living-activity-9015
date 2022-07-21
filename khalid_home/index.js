
let key = `0a3107f541194a9e9b886bdcbbb671d0`

let topHeadlines = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`

fetch(topHeadlines).then((res) => {
    return res.json()
}).then((res) => {
    console.log(res.articles)
}).catch((err) => {
    console.log(err)
});

let displayData = (data) => {
    const nationalFeatures = document.querySelector('#nationalFeatures');
    data.forEach((elem) => {

    })
}

{/* <div id="nfDiv1">
<img id="nfDiv1Img" src="" alt="">
<h3 id="nfDiv1SideHeading"></h3>
<p id="nfDiv1Content"></p>
<p id="nfDiv1PublishedBy"></p>
            </div> */}