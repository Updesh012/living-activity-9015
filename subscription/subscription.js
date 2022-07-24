
for(let i=1;i<=4;i++){
    document.querySelector(`#btn-${i}`).addEventListener("click",fun1)

    function fun1(){
        let x = document.querySelector(`#amount-${i}`).innerHTML;
        console.log(x)
        localStorage.setItem("amount",JSON.stringify(x));
        window.location.href = "../verification/email.html"
        
    }
}








