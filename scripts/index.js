
async function myFunction() {
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=280cfd40a460489e99d7b0bf899d28c3`;
  try {
    let res = await fetch(url);

    let data = await res.json();
    console.log(data)
    appendData(data.articles);
  } catch (error) {
    console.log(error)
  }

}
myFunction();
function appendData(data) {
  var container = document.querySelector("#container")

  let count = 1;
  data.forEach((el) => {
    // console.log(el);
    let div1 = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("id", "image")
    image.setAttribute("src", el.urlToImage);

    image.addEventListener('click', function () {
      window.location.href = el.url;
    });

    var publish = document.createElement("p")
    publish.innerText = el.publishedAt
    let tit = document.createElement("h2");
    tit.id = "tit";
    tit.addEventListener('click', function () {
      window.location.href = el.url;
    });
    tit.style = "font-size:24px"
    tit.innerText = el.title;
    let content = document.createElement("h5")
    content.id = "content"
    content.innerText = el.content


    let description = document.createElement("p")
    description.innerText = el.description
    var div = document.getElementById(`news${count}`)

    div1.append(image, publish, tit, content, description);

    div.append(div1)
    count++;
    //container.append(div1);
    console.log(div1);
  });

}
