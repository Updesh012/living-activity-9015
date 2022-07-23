
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

// entertainment

let displayEntertainment = (data) => {

    data.forEach((elem) => {
        const enterDiv1Img = document.querySelector('#enterDiv1Img');
        const enterDiv1SideHeading = document.querySelector('#enterDiv1SideHeading');
        const enterDiv1PublishedBy = document.querySelector('#enterDiv1PublishedBy');
        const enterDiv1Description = document.querySelector('#enterDiv1Description');
        const enterDiv1PublishedByDate = document.querySelector('#enterDiv1PublishedByDate');

        enterDiv1Img.src = elem.urlToImage;
        enterDiv1SideHeading.innerText = elem.title;
        enterDiv1Description.innerText = elem.description + elem.content;
        enterDiv1PublishedByDate.innerText = ` | ${elem.publishedAt}`
        enterDiv1PublishedBy.innerHTML = `${elem.source.name}`
    })
}

let displayShortEntertainment = (data) => {
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
            const div = document.querySelector(`#enterDiv2div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
        else if (count < 4) {
            const div = document.querySelector(`#enterDiv3div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
        else if (count < 6) {
            const div = document.querySelector(`#enterDiv4div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
    })
}


fetch(entertainmentUrl).then((res) => {
    return res.json()
}).then((res) => {
    // console.log(res.articles)
    displayEntertainment(res.articles)
    displayShortEntertainment(res.articles)
}).catch((err) => {
    console.log(err)
});

fetch(topHeadlines).then((res) => {
    return res.json()
}).then((res) => {
    // console.log(res.articles)
    displayData(res.articles)
    displayShort(res.articles)
}).catch((err) => {
    console.log(err)
});
