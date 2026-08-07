const hollywoodNews = [

{
id:1,
category:"Hollywood",
title:"Marvel Announces New Superhero Projects",
description:"Marvel continues expanding its cinematic universe with new movies and characters.",
image:"images/marvel.jpg",
date:"August 2026",
author:"Brice Media",
views:"120K",
content:"Marvel Studios continues creating new superhero stories that attract millions of fans around the world."
},


{
id:2,
category:"Hollywood",
title:"Netflix Releases New Popular Movies And Series",
description:"Netflix continues producing successful entertainment content worldwide.",
image:"images/netflix.jpg",
date:"August 2026",
author:"Brice Media",
views:"95K",
content:"Netflix remains one of the biggest streaming platforms with millions of viewers worldwide."
},


{
id:3,
category:"Hollywood",
title:"Avatar Franchise Returns With New Adventure",
description:"The Avatar universe continues growing with new cinematic experiences.",
image:"images/avatar.jpg",
date:"August 2026",
author:"Brice Media",
views:"110K",
content:"Avatar remains one of the most successful movie franchises in cinema history."
},


{
id:4,
category:"Hollywood",
title:"Oscar Awards Celebrate Biggest Movie Stars",
description:"Hollywood's biggest ceremony honors actors, directors and filmmakers.",
image:"images/oscar.jpg",
date:"August 2026",
author:"Brice Media",
views:"85K",
content:"The Academy Awards continue celebrating the greatest achievements in filmmaking."
},


{
id:5,
category:"Hollywood",
title:"Warner Bros Announces Major Movie Releases",
description:"Warner Bros prepares new films for global audiences.",
image:"images/warner-bros.jpg",
date:"August 2026",
author:"Brice Media",
views:"70K",
content:"Warner Bros continues producing major entertainment projects for cinema fans."
},


{
id:6,
category:"Hollywood",
title:"Hollywood Stars Join New Blockbuster Films",
description:"Famous actors prepare for exciting new movie projects.",
image:"images/hollywood-stars.jpg",
date:"August 2026",
author:"Brice Media",
views:"78K",
content:"Top Hollywood actors continue working on major international productions."
},


{
id:7,
category:"Hollywood",
title:"Action Movies Continue Dominating Box Office",
description:"Action films remain among the most popular entertainment genres.",
image:"images/action-movie.jpg",
date:"August 2026",
author:"Brice Media",
views:"65K",
content:"Action movies continue attracting audiences with advanced visual effects and stories."
},


{
id:8,
category:"Hollywood",
title:"New Streaming Platforms Change Entertainment",
description:"Streaming services are transforming how people watch movies and series.",
image:"images/streaming.jpg",
date:"August 2026",
author:"Brice Media",
views:"60K",
content:"Digital entertainment platforms continue changing the future of Hollywood."
}


];



const newsContainer = document.getElementById("news-container");


if(newsContainer){


hollywoodNews.forEach(news=>{


newsContainer.innerHTML += `

<div class="news-card">


<img src="../${news.image}" alt="${news.title}">


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
