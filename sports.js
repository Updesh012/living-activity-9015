import navbar from  "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

const api_key=`d9b5c5df959141f49872b888ccf266d4`;

const url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d9b5c5df959141f49872b888ccf266d4`

async function getdata(url){
    let res= await fetch(url)
    let data=await res.json();
    console.log(data)
    append(data.articles)
}
getdata(url)

function append(data){
    let container=document.getElementById('bottom-append')
    data.forEach(function (el){
        let div1=document.createElement('div')
        let image=document.createElement('img')
        image.src=el.urlToImage;
        let div2=document.createElement('div')
        let head=document.createElement('h3')
        head.innerText=el.title
        

        let det=document.createElement('p')
        det.innerText=el.description;
        div2.append(head,det)

        div1.append(image,div2)
        let hr=document.createElement('hr')
        container.append(hr,div1)

    })
}

// let removeTime = (date = new Date()) =>{
//     return new Date(date.toDateString())
// }
// // d.setFullYear(2022);
// // let text = d.toUTCString()
// document.getElementById("demo").innerHTML = new Date().toDateString();
