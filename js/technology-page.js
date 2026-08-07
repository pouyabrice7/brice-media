const technologyContainer = document.getElementById("technology-container");


if(technologyContainer){


technologyNews.forEach(news=>{


technologyContainer.innerHTML += `


<div class="news-card">


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
&nbsp;
✍ ${news.author}
&nbsp;
👁 ${news.views}
</small>


<br><br>


<a href="../article.html?id=${news.id}" class="btn">
Read More
</a>


</div>


</div>


`;


});


}
