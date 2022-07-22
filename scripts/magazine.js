import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()


let removeTime = (date = new Date()) =>{
    return new Date(date.toDateString())
}
document.getElementById("demo").innerHTML = new Date().toDateString();


