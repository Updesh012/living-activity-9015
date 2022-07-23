
let key = `0a3107f541194a9e9b886bdcbbb671d0`
let topHeadlines = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`
let entertainmentUrl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${key}`


let displayData = (data) => {
    
    data.forEach((elem) => {

        const nfDiv1Img = document.querySelector('#nfDiv1Img');
        const nfDiv1SideHeading = document.querySelector('#nfDiv1SideHeading');
        const nfDiv1PublishedBy = document.querySelector('#nfDiv1PublishedBy');
        const nfDiv1Description = document.querySelector('#nfDiv1Description');
        const nfDiv1PublishedByDate = document.querySelector('#nfDiv1PublishedByDate');

        nfDiv1Img.src = elem.urlToImage;
        nfDiv1SideHeading.innerText = elem.title;
        nfDiv1Description.innerText = elem.description + elem.content;
        nfDiv1PublishedByDate.innerText = ` | ${elem.publishedAt}`
        nfDiv1PublishedBy.innerHTML = `${elem.source.name}`
    })
}

let displayShort = (data) => {
    let idNumber = 1
    let count = 0
    data.forEach((elem) => {

        const img = document.createElement('img');
        img.classList = "smallImg"
        img.src = elem.urlToImage

        const title = document.createElement('h3');
        title.classList = "titleSmall"
        title.innerText = elem.title

        const description = document.createElement('p');
        description.classList = "descriptionSmall"
        description.innerText = elem.description

        const publishedByDivSmall = document.createElement('div');
        publishedByDivSmall.classList = "publishedByDivSmall"

        const publishedBySmallName = document.createElement('p');
        publishedBySmallName.classList = "publishedBySmallName"
        publishedBySmallName.innerText = `${elem.source.name}`;

        const publishedBy = document.createElement('p');
        publishedBy.classList = "publishedBy"
        publishedBy.innerHTML = ` | ${elem.publishedAt}`;

        publishedByDivSmall.append(publishedBySmallName, publishedBy)

        if (count < 2) {
            const div = document.querySelector(`#nfDiv2div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }

        else if (count < 4) {
            const div = document.querySelector(`#nfDiv3div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
        else if (count < 6) {
            const div = document.querySelector(`#nfDiv4div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
    })
}


fetch(topHeadlines).then((res) => {
    return res.json()
}).then((res) => {
    // console.log(res.articles)
    displayData(res.articles)
    displayShort(res.articles)
}).catch((err) => {
    console.log(err)
});
