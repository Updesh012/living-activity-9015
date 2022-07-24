
// let key = `0a3107f541194a9e9b886bdcbbb671d0`
// let key = `b6067b778da746ecb9ba3e2366565000`
let key = `396425de039f483eb2352be93f7f5ded`
let topHeadlines = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`
let entertainmentUrl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${key}`
let sportsUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${key}`
let technologyUrl = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${key}`
let healthUrl = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`
let scienceUrl = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${key}`



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

        nfDiv1Img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        nfDiv1SideHeading.addEventListener("click", () => {
            window.location.href = elem.url
        })
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
        title.classList = "newsTitle"
        title.innerText = elem.title

        img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        title.addEventListener("click", () => {
            window.location.href = elem.url
        })

        const description = document.createElement('p');
        description.classList = "newsdescription"
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
    console.log(res.articles)
    displayData(res.articles)
    displayShort(res.articles)
}).catch((err) => {
    console.log(err)
});


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

        enterDiv1Img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        enterDiv1SideHeading.addEventListener("click", () => {
            window.location.href = elem.url
        })
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
        title.classList = "newsTitle"
        title.innerText = elem.title

        img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        title.addEventListener("click", () => {
            window.location.href = elem.url
        })

        const description = document.createElement('p');
        description.classList = "newsdescription"
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


// Sports

let displaySports = (data) => {

    data.forEach((elem) => {
        const sportsDiv1Img = document.querySelector('#sportsDiv1Img');
        const sportsDiv1SideHeading = document.querySelector('#sportsDiv1SideHeading');
        const sportsDiv1PublishedBy = document.querySelector('#sportsDiv1PublishedBy');
        const sportsDiv1Description = document.querySelector('#sportsDiv1Description');
        const sportsDiv1PublishedByDate = document.querySelector('#sportsDiv1PublishedByDate');

        sportsDiv1Img.src = elem.urlToImage;
        sportsDiv1SideHeading.innerText = elem.title;
        sportsDiv1Description.innerText = elem.description + elem.content;
        sportsDiv1PublishedByDate.innerText = ` | ${elem.publishedAt}`
        sportsDiv1PublishedBy.innerHTML = `${elem.source.name}`

        sportsDiv1Img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        sportsDiv1SideHeading.addEventListener("click", () => {
            window.location.href = elem.url
        })
    })
}

let displayShortSports = (data) => {
    let idNumber = 1
    let count = 0
    data.forEach((elem) => {

        const img = document.createElement('img');
        img.classList = "smallImg"
        img.src = elem.urlToImage

        const title = document.createElement('h3');
        title.classList = "newsTitle"
        title.innerText = elem.title

        img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        title.addEventListener("click", () => {
            window.location.href = elem.url
        })

        const description = document.createElement('p');
        description.classList = "newsdescription"
        description.innerText = elem.description

        const publishedByDivSmall = document.createElement('div');
        publishedByDivSmall.classList = "publishedByDiv"

        const publishedBySmallName = document.createElement('p');
        publishedBySmallName.classList = "publishedBySmallName"
        publishedBySmallName.innerText = `${elem.source.name}`;

        const publishedBy = document.createElement('p');
        publishedBy.classList = "publishedBy"
        publishedBy.innerHTML = ` | ${elem.publishedAt}`;

        publishedByDivSmall.append(publishedBySmallName, publishedBy)

        if (count < 2) {
            const div = document.querySelector(`#sportsDiv2div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
        else if (count < 4) {
            const div = document.querySelector(`#sportsDiv3div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
        else if (count < 6) {
            const div = document.querySelector(`#sportsDiv4div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
    })
}


fetch(sportsUrl).then((res) => {
    return res.json()
}).then((res) => {
    // console.log(res.articles)
    displaySports(res.articles)
    displayShortSports(res.articles)
}).catch((err) => {
    console.log(err)
});





// Technology

let displayTech = (data) => {

    data.forEach((elem) => {
        const techDiv1Img = document.querySelector('#techDiv1Img');
        const techDiv1SideHeading = document.querySelector('#techDiv1SideHeading');
        const techDiv1PublishedBy = document.querySelector('#techDiv1PublishedBy');
        const techDiv1Description = document.querySelector('#techDiv1Description');
        const techDiv1PublishedByDate = document.querySelector('#techDiv1PublishedByDate');

        techDiv1Img.src = elem.urlToImage;
        techDiv1SideHeading.innerText = elem.title;
        techDiv1Description.innerText = elem.description + elem.content;
        techDiv1PublishedByDate.innerText = ` | ${elem.publishedAt}`
        techDiv1PublishedBy.innerHTML = `${elem.source.name}`

        techDiv1Img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        techDiv1SideHeading.addEventListener("click", () => {
            window.location.href = elem.url
        })
    })
}

let displayShortTech = (data) => {
    let idNumber = 1
    let count = 0
    data.forEach((elem) => {

        const img = document.createElement('img');
        img.classList = "smallImg"
        img.src = elem.urlToImage

        const title = document.createElement('h3');
        title.classList = "newsTitle"
        title.innerText = elem.title

        img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        title.addEventListener("click", () => {
            window.location.href = elem.url
        })

        const description = document.createElement('p');
        description.classList = "newsdescription"
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
            const div = document.querySelector(`#techDiv2div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
        else if (count < 4) {
            const div = document.querySelector(`#techDiv3div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
        else if (count < 6) {
            const div = document.querySelector(`#techDiv4div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
    })
}


fetch(technologyUrl).then((res) => {
    return res.json()
}).then((res) => {
    // console.log(res.articles)
    displayTech(res.articles)
    displayShortTech(res.articles)
}).catch((err) => {
    console.log(err)
});


// Health

let displayHealth = (data) => {

    data.forEach((elem) => {
        const healthDiv1Img = document.querySelector('#healthDiv1Img');
        const healthDiv1SideHeading = document.querySelector('#healthDiv1SideHeading');
        const healthDiv1PublishedBy = document.querySelector('#healthDiv1PublishedBy');
        const healthDiv1Description = document.querySelector('#healthDiv1Description');
        const healthDiv1PublishedByDate = document.querySelector('#healthDiv1PublishedByDate');

        healthDiv1Img.src = elem.urlToImage;
        healthDiv1SideHeading.innerText = elem.title;
        healthDiv1Description.innerText = elem.description + elem.content;
        healthDiv1PublishedByDate.innerText = ` | ${elem.publishedAt}`
        healthDiv1PublishedBy.innerHTML = `${elem.source.name}`

        healthDiv1Img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        healthDiv1SideHeading.addEventListener("click", () => {
            window.location.href = elem.url
        })
    })
}

let displayShortHealth = (data) => {
    let idNumber = 1
    let count = 0
    data.forEach((elem) => {

        const img = document.createElement('img');
        img.classList = "smallImg"
        img.src = elem.urlToImage

        const title = document.createElement('h3');
        title.classList = "newsTitle"
        title.innerText = elem.title

        img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        title.addEventListener("click", () => {
            window.location.href = elem.url
        })

        const description = document.createElement('p');
        description.classList = "newsdescription"
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
            const div = document.querySelector(`#healthDiv2div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
        else if (count < 4) {
            const div = document.querySelector(`#healthDiv3div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
        else if (count < 6) {
            const div = document.querySelector(`#healthDiv4div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
    })
}


fetch(healthUrl).then((res) => {
    return res.json()
}).then((res) => {
    // console.log(res.articles)
    displayHealth(res.articles)
    displayShortHealth(res.articles)
}).catch((err) => {
    console.log(err)
});




// Science

let displayScience = (data) => {

    data.forEach((elem) => {
        const scienceDiv1Img = document.querySelector('#scienceDiv1Img');
        const scienceDiv1SideHeading = document.querySelector('#scienceDiv1SideHeading');
        const scienceDiv1PublishedBy = document.querySelector('#scienceDiv1PublishedBy');
        const scienceDiv1Description = document.querySelector('#scienceDiv1Description');
        const scienceDiv1PublishedByDate = document.querySelector('#scienceDiv1PublishedByDate');

        scienceDiv1Img.src = elem.urlToImage;
        scienceDiv1SideHeading.innerText = elem.title;
        scienceDiv1Description.innerText = elem.description + elem.content;
        scienceDiv1PublishedByDate.innerText = ` | ${elem.publishedAt}`
        scienceDiv1PublishedBy.innerHTML = `${elem.source.name}`

        scienceDiv1Img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        scienceDiv1SideHeading.addEventListener("click", () => {
            window.location.href = elem.url
        })
    })
}

let displayShortScience = (data) => {
    let idNumber = 1
    let count = 0
    data.forEach((elem) => {

        const img = document.createElement('img');
        img.classList = "smallImg"
        img.src = elem.urlToImage

        const title = document.createElement('h3');
        title.classList = "newsTitle"
        title.innerText = elem.title

        img.addEventListener("click", () => {
            window.location.href = elem.url
        })

        title.addEventListener("click", () => {
            window.location.href = elem.url
        })

        const description = document.createElement('p');
        description.classList = "newsdescription"
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
            const div = document.querySelector(`#scienceDiv2div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
        else if (count < 4) {
            const div = document.querySelector(`#scienceDiv3div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
        else if (count < 6) {
            const div = document.querySelector(`#scienceDiv4div${idNumber}`);
            count++
            idNumber++
            div.append(img, title, description, publishedByDivSmall)
        }
    })
}


fetch(scienceUrl).then((res) => {
    return res.json()
}).then((res) => {
    // console.log(res.articles)
    displayScience(res.articles)
    displayShortScience(res.articles)
}).catch((err) => {
    console.log(err)
});