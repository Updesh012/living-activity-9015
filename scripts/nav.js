import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

// const d = new Date()
let removeTime = (date = new Date()) =>{
    return new Date(date.toDateString())
}
// d.setFullYear(2022);
// let text = d.toUTCString()
document.getElementById("demo").innerHTML = new Date().toDateString();
