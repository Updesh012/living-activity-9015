document.querySelector("#login").addEventListener("click",login)

let count = 0;
function login(){
    count++;
    if(count%2==1){
        document.querySelector("#login").innerHTML = "Login with email"
        document.querySelector("#email").type = "number"
        document.querySelector("#email").placeholder = "Enter Number"
        document.querySelector("#p").innerHTML = "ConsCent user? Use same phone number"
        document.querySelector("#email").id = "phone"
    }
    else{
        document.querySelector("#login").innerHTML = "Login with phone"
        document.querySelector("#phone").type = "email"
        document.querySelector("#phone").placeholder = "Enter Email"
        document.querySelector("#p").innerHTML = "ConsCent user? Use same email"
        document.querySelector("#phone").id = "email"


    }
}

function input(){
    // let y = document.querySelector("#phone").value;
    let x = document.querySelector("#input>input").value
    // console.log(x)
    if(document.querySelector("#input>input").id === "email"){
        if(x.includes(".com")){
            console.log("hi")
            let a = document.querySelector("#ver");
            a.style.backgroundColor = "blue"
            a.style.color = "white";
            a.style.cursor = "pointer"
        }
    }

    else if(document.querySelector("#input>input").id === "phone"){
        // console.log(x)
        if(x.length === 10){
            let a = document.querySelector("#ver");
            a.style.backgroundColor = "blue"
            a.style.color = "white";
            a.style.cursor = "pointer"
        }
    }

}

document.querySelector("#ver").addEventListener("click",otp_generate)
let query;
function otp_generate(){
    // console.log('hello')

    let otp = Math.random().toFixed(4)*10000;
    let k = Math.round(otp)
    query = k;
    console.log(k) 
    alert(`Your one time password is --> ${k}`)

}

document.querySelector("#OTP").addEventListener("click",otp_veri);

function otp_veri(){

    let m = document.querySelector("#otp>input").value;
    if(m==query){

        setTimeout(function(){
            alert("Verification Successfull!")
            window.location.href = "../Pay/pay.html"
        },2000)


    }
    else{
        alert("Invalid OTP")
    }



}
















