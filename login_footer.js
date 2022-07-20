// shown url = https://tse1.mm.bing.net/th?id=OIP.trKIhf_JkfJafVZAwfZMVgHaES&pid=Api&P=0
// unshoen url = https://tse1.mm.bing.net/th?id=OIP.Os00U0NMmW8jFa8cG7hTeQHaEz&pid=Api&P=0

// *************************changing icon***********************

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



