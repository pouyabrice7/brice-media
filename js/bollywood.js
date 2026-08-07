const bollywoodNews = [

{
id:1,
category:"Bollywood",
title:"Bollywood Prepares For New Blockbuster Movies",
description:"Indian cinema continues creating exciting movies for global audiences.",
image:"images/bollywood-movies.jpg",
date:"August 2026",
author:"Brice Media",
views:"85K",
content:"Bollywood continues growing as one of the world's biggest film industries with millions of fans worldwide."
},

{
id:2,
category:"Bollywood",
title:"Shah Rukh Khan Returns With New Movie Projects",
description:"The Bollywood superstar continues entertaining millions of fans.",
image:"images/shah-rukh-khan.jpg",
date:"August 2026",
author:"Brice Media",
views:"120K",
content:"Shah Rukh Khan remains one of the most popular actors in Indian cinema history."
},

{
id:3,
category:"Bollywood",
title:"Salman Khan Announces New Entertainment Projects",
description:"Salman Khan continues working on major Bollywood productions.",
image:"images/salman-khan.jpg",
date:"August 2026",
author:"Brice Media",
views:"100K",
content:"Salman Khan continues attracting huge audiences with his movies and performances."
},

{
id:4,
category:"Bollywood",
title:"Indian Cinema Expands Around The World",
description:"Bollywood movies gain popularity across international markets.",
image:"images/indian-cinema.jpg",
date:"August 2026",
author:"Brice Media",
views:"70K",
content:"Indian cinema continues reaching new audiences through streaming platforms and global releases."
},

{
id:5,
category:"Bollywood",
title:"Deepika Padukone Stars In New Film",
description:"The actress continues her successful international career.",
image:"images/deepika-padukone.jpg",
date:"August 2026",
author:"Brice Media",
views:"75K",
content:"Deepika Padukone remains one of India's most recognized entertainment stars."
},

{
id:6,
category:"Bollywood",
title:"Bollywood Music Becomes Globally Popular",
description:"Indian movie songs continue attracting fans worldwide.",
image:"images/bollywood-music.jpg",
date:"August 2026",
author:"Brice Media",
views:"65K",
content:"Bollywood music plays an important role in the success of Indian movies."
},

{
id:7,
category:"Bollywood",
title:"Netflix And Streaming Change Indian Entertainment",
description:"Streaming platforms create new opportunities for Indian filmmakers.",
image:"images/bollywood-streaming.jpg",
date:"August 2026",
author:"Brice Media",
views:"60K",
content:"Digital platforms are helping Bollywood reach international audiences."
},

{
id:8,
category:"Bollywood",
title:"Young Bollywood Stars Become Future Icons",
description:"New actors are gaining attention from movie fans.",
image:"images/young-bollywood.jpg",
date:"August 2026",
author:"Brice Media",
views:"55K",
content:"A new generation of Bollywood stars is shaping the future of Indian cinema."
}


];



const newsContainer = document.getElementById("news-container");


if(newsContainer){


bollywoodNews.forEach(news=>{


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
