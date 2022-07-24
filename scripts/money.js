import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()

let removeTime = (date = new Date()) => {
    return new Date(date.toDateString())
}
document.getElementById("demo").innerHTML = new Date().toDateString();




const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fdd048b8080749a79ea5aaceea734249`


import { getData, append } from "./fetch.js";

let container = document.getElementById("container")

getData(url).then((res) => {
    console.log(res);
    append(res, container);
})