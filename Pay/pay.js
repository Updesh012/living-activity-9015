let x = JSON.parse(localStorage.getItem("amount"));
document.querySelector("#amount").innerHTML = x;

let details = JSON.parse(localStorage.getItem("details")) || [];

function det(){

    let password = document.querySelector("#password").value
    let number = document.querySelector("#number").value;



    class det{

        constructor(p,n){
            this.password = p;
            this.number = n;
        }
    }

    let obj =new det(password,number);
    console.log(obj);
    details.push(obj);
    localStorage.setItem("details",JSON.stringify(details))

    window.location.href = "../login_footer.html"
}










