// shown url = https://tse1.mm.bing.net/th?id=OIP.trKIhf_JkfJafVZAwfZMVgHaES&pid=Api&P=0
// unshoen url = https://tse1.mm.bing.net/th?id=OIP.Os00U0NMmW8jFa8cG7hTeQHaEz&pid=Api&P=0

// *************************changing icon***********************

import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()

let removeTime = (date = new Date()) =>{
    return new Date(date.toDateString())
}
document.getElementById("demo").innerHTML = new Date().toDateString();





let x =document.getElementById("password_icon")
x.addEventListener("click",change_icon)
let count =0;
function change_icon(){
    count++;
    if(count%2==1){
        // console.log("odd")
        x.src = "https://tse1.mm.bing.net/th?id=OIP.trKIhf_JkfJafVZAwfZMVgHaES&pid=Api&P=0"
        document.getElementById("pass").setAttribute("type","text")
    }
    else{
        x.src = "https://tse1.mm.bing.net/th?id=OIP.Os00U0NMmW8jFa8cG7hTeQHaEz&pid=Api&P=0"
        document.getElementById("pass").setAttribute("type","password")
        
        // console.log("even")
    }


}


// *************************changing icon***********************

let datafromls = JSON.parse(localStorage.getItem("details")) || [];
console.log(datafromls)
document.querySelector("form").addEventListener("submit",check)

function check(event){
    event.preventDefault();
    console.log("hi")

    let pass = document.querySelector("#pass").value;
    let num = document.querySelector("#num").value;

    let fil = datafromls.filter(function(elem){

        return elem.password === pass && elem.number === num

    })

    if(fil.length > 0){
        alert("Sign in Successful")
        window.location.href = "index.html"
    }
    else{
        alert("Invalid Details")
    }

}

