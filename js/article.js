/*====================================
ARTICLE PAGE
====================================*/

const params = new URLSearchParams(window.location.search);

const articleId = Number(params.get("id"));

const article = newsData.find(item => item.id === articleId);

if(article){

document.title = article.title + " | Brice Media";

document.getElementById("article-image").src = article.image;

document.getElementById("article-image").alt = article.title;

document.getElementById("article-category").textContent = article.category;

document.getElementById("article-title").textContent = article.title;

document.getElementById("article-date").textContent = article.date;

document.getElementById("article-author").textContent =
"By " + article.author;

document.getElementById("article-views").textContent =
article.views + " Views";

document.getElementById("article-content").innerHTML = `

<p>${article.description}</p>

<p>
${article.content}
</p>

<p>
Stay connected with Brice Media for the latest developments from around the world.
</p>

`;

}else{

document.querySelector(".article-page").innerHTML = `

<div class="container">

<h1>Article Not Found</h1>

<a href="index.html" class="btn">
Back Home
</a>

</div>

`;

}

/*========================
SHARE ARTICLE
========================*/


const pageUrl = window.location.href;


const telegramBtn = document.getElementById("telegram-share");

const whatsappBtn = document.getElementById("whatsapp-share");

const copyBtn = document.getElementById("copy-link");



if(telegramBtn){

telegramBtn.href =
`https://t.me/share/url?url=${pageUrl}&text=${article.title}`;

}



if(whatsappBtn){

whatsappBtn.href =
`https://wa.me/?text=${article.title} ${pageUrl}`;

}



if(copyBtn){

copyBtn.addEventListener("click",()=>{


navigator.clipboard.writeText(pageUrl);


alert("Link copied!");

});


}
