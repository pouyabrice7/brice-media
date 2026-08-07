const sportsNews = [

{
id:1,
category:"Sports",
title:"NBA Stars Prepare For Another Exciting Season",
description:"The world's best basketball players continue competing at the highest level.",
image:"images/nba.jpg",
date:"August 2026",
author:"Brice Media",
views:"75K",
content:"The NBA continues attracting millions of fans with incredible performances from basketball stars."
},

{
id:2,
category:"Sports",
title:"UFC Champions Prepare For Biggest Fights",
description:"Top fighters are ready for new challenges inside the octagon.",
image:"images/ufc.jpg",
date:"August 2026",
author:"Brice Media",
views:"68K",
content:"UFC remains one of the most popular combat sports organizations in the world."
},

{
id:3,
category:"Sports",
title:"Formula 1 Season Brings New Competition",
description:"The world's fastest drivers compete for championship glory.",
image:"images/formula1.jpg",
date:"August 2026",
author:"Brice Media",
views:"62K",
content:"Formula 1 continues pushing the limits of speed, technology and racing innovation."
},

{
id:4,
category:"Sports",
title:"Tennis Legends Create New Records",
description:"The biggest tennis stars continue making history.",
image:"images/tennis.jpg",
date:"August 2026",
author:"Brice Media",
views:"55K",
content:"Tennis remains one of the most watched individual sports worldwide."
},

{
id:5,
category:"Sports",
title:"Olympic Athletes Prepare For Future Games",
description:"Athletes from around the world train for major competitions.",
image:"images/olympics.jpg",
date:"August 2026",
author:"Brice Media",
views:"58K",
content:"The Olympic Games continue bringing together the best athletes from every country."
},

{
id:6,
category:"Sports",
title:"World Boxing Champions Return To The Ring",
description:"Top boxing stars prepare for major championship fights.",
image:"images/boxing.jpg",
date:"August 2026",
author:"Brice Media",
views:"47K",
content:"Boxing continues to attract fans with legendary champions and exciting matches."
},

{
id:7,
category:"Sports",
title:"Esports Becomes A Global Sports Industry",
description:"Competitive gaming continues growing worldwide.",
image:"images/esports.jpg",
date:"August 2026",
author:"Brice Media",
views:"52K",
content:"Esports is becoming one of the fastest-growing entertainment industries."
},

{
id:8,
category:"Sports",
title:"World Athletes Break New Records",
description:"Sports stars continue achieving incredible results.",
image:"images/world-athletes.jpg",
date:"August 2026",
author:"Brice Media",
views:"45K",
content:"Athletes around the world continue inspiring fans with dedication and performance."
}



];



const newsContainer = document.getElementById("news-container");


if(newsContainer){


sportsNews.forEach(news=>{


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
