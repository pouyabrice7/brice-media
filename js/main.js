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


<a href="article.html?id=${news.id}" class="btn">
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

document.addEventListener("click", function(e){

if(
!menu.contains(e.target) &&
!menuToggle.contains(e.target)
){
menu.classList.remove("active");
}

});

/*====================================
LIVE SEARCH
====================================*/

const searchInput = document.getElementById("search-input");

if(searchInput){

searchInput.addEventListener("keyup", function(){

const value = this.value.toLowerCase();

const cards = document.querySelectorAll(".news-card");

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

/*====================================
CATEGORY FILTER
====================================*/

const filterButtons = document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {


button.addEventListener("click", function(){


const category = this.dataset.category;

/*====================================
CATEGORY FILTER
====================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const newsCards = document.querySelectorAll(".news-card");


filterButtons.forEach(button => {

button.addEventListener("click", function(){


const category = this.dataset.category;


// active button

filterButtons.forEach(btn=>{
btn.classList.remove("active");
});

this.classList.add("active");



newsCards.forEach(card=>{


const cardCategory = card.querySelector("span").textContent.trim();



if(category === "all"){

card.style.display = "block";

}

else if(cardCategory.toLowerCase() === category.toLowerCase()){

card.style.display = "block";

}

else{

card.style.display = "none";

}


});


});


});                     
