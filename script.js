let box = document.querySelector(".row");
async function anime(){
    try{
        let url="https://api.jikan.moe/v4/top/anime";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        for( let i=0; i<data.data.length; i++ ){
            console.log(data.data[i]);
box.innerHTML +=`
<div class="container"
<div class="contentArea">
<section class="title">${data.data[i].title}</section>
<img src="${data.data[i].images.jpg.image_url}" class="image" alt="${data.data[i].title}"/>
<section class="genre">GENRE : ${data.data[i].genres[0].name}</section>
<section class="rank">RANK : ${data.data[i].rank}</section>
<section class="rating">RATING : ${data.data[i].rating}</section>
</div>
</div>
`
        }
    }
    catch(error){
        console.log(error);
}
}
anime();
