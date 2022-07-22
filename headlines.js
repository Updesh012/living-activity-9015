import navbar from  "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

const api_key=`d9b5c5df959141f49872b888ccf266d4`;

const url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d9b5c5df959141f49872b888ccf266d4`

async function getdata(url){
    let res= await fetch(url)
    let data=await res.json();
    console.log(data)
    append(data.articles)
}
getdata(url)

let removeTime = (date = new Date()) =>{
    return new Date(date.toDateString())
 }

function append(data){
    let container=document.getElementById('bottom-append')
    data.forEach(function (el){
        let div1=document.createElement('div')
        let image=document.createElement('img')
        image.src=el.urlToImage;
        let div2=document.createElement('div')
        let head=document.createElement('h3')
        head.innerText=el.title
        let x= new Date().toDateString();
        let y=document.createElement('p')
        y.innerText=x;
        y.setAttribute("class","date")

        let det=document.createElement('p')
        det.innerText=el.description;
        div2.append(head,det)

        div1.append(y,image,div2)
        let hr=document.createElement('hr')
        container.append(hr,div1)

    })
}

//console.log(dd)

// // d.setFullYear(2022);
// // let text = d.toUTCString()
//document.getElementById("demo").innerHTML =

//console.log(x)

let arr=["https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1658303359.webp",
         "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1658319241.webp",
        "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1658320464.webp",
        "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1658329806.webp"];

   var  phtgl= document.getElementById('photo_gal')
   console.log(phtgl)
   let i=0;
        setInterval(function (){
            if(i===3){
                i=0;
            }
            phtgl.innerHTML=null
            let image=document.createElement('img')
            image.src=arr[i]
            phtgl.append(image)
            i++;
        },3000)
