/*====================================
BRICE MEDIA
AUTO NEWS RENDER SYSTEM
====================================*/


const newsContainer = document.getElementById("news-container");


if(newsContainer){


newsData.forEach(news => {


const newsCard = document.createElement("div");


newsCard.classList.add("news-card");



newsCard.innerHTML = `

<img src="${news.image}" alt="${news.title}">


<div class="news-content">


<span>
${news.category}
</span>


<h3>
${news.title}
</h3>


<p>
${news.description}
</p>


<small>

📅 ${news.date}
&nbsp;&nbsp;
✍ ${news.author}
&nbsp;&nbsp;
👁 ${news.views}

</small>


<br><br>


<a href="#" class="btn">
Read More
</a>


</div>

`;



newsContainer.appendChild(newsCard);



});


}

const menuToggle = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu");


menuToggle.addEventListener("click",()=>{

menu.classList.toggle("active");

});
