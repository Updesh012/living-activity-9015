let  getData = async (url) =>{
    let res = await fetch(url);
    let data = await res.json();

    let news = data.articles

    return news
    // console.log(data)
}

let append = (data, cont) => {
    data.forEach(({title, urlToImage , description, author}) => {

        let img = document.createElement("img")
        img.src = urlToImage

        let t = document.createElement("h2")
        t.innerText = title;

        let desc = document.createElement("p")
        desc.innerText = description;

        let writer = document.createElement("p")
        writer.innerText = author;

        let div = document.createElement("div")
        div.append(img, t, desc, writer);

        cont.append(div)

    });
}
export {getData, append}

// title  urlToImage description content author