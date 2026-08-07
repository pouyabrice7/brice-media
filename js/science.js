const scienceNews = [

{
id:1,
category:"Science",
title:"NASA Continues Exploring The Future Of Space",
description:"NASA works on new missions and discoveries beyond Earth.",
image:"images/nasa-space.jpg",
date:"August 2026",
author:"Brice Media",
views:"95K",
content:"NASA continues advancing space exploration through scientific research and new missions."
},


{
id:2,
category:"Science",
title:"SpaceX Develops Next Generation Space Technology",
description:"SpaceX continues improving spacecraft and space exploration systems.",
image:"images/spacex-science.jpg",
date:"August 2026",
author:"Brice Media",
views:"110K",
content:"SpaceX is working on future space transportation and exploration technologies."
},


{
id:3,
category:"Science",
title:"Scientists Make Progress In Quantum Computing",
description:"Researchers achieve new breakthroughs in quantum technology.",
image:"images/quantum-science.jpg",
date:"August 2026",
author:"Brice Media",
views:"85K",
content:"Quantum computing research continues creating possibilities for future technologies."
},


{
id:4,
category:"Science",
title:"New Discoveries Reveal Secrets Of The Universe",
description:"Scientists continue studying galaxies, planets and cosmic mysteries.",
image:"images/universe.jpg",
date:"August 2026",
author:"Brice Media",
views:"90K",
content:"Space research helps humanity understand the universe and its origins."
},


{
id:5,
category:"Science",
title:"Robotics Research Creates Smarter Machines",
description:"Scientists develop advanced robots for future industries.",
image:"images/science-robotics.jpg",
date:"August 2026",
author:"Brice Media",
views:"70K",
content:"Robotics research continues improving artificial intelligence and automation."
},


{
id:6,
category:"Science",
title:"Scientists Study Climate Solutions",
description:"Researchers search for new ways to protect the environment.",
image:"images/climate-science.jpg",
date:"August 2026",
author:"Brice Media",
views:"65K",
content:"Science plays an important role in solving global environmental challenges."
},


{
id:7,
category:"Science",
title:"Ocean Research Reveals New Discoveries",
description:"Scientists explore unknown areas of the world's oceans.",
image:"images/ocean-research.jpg",
date:"August 2026",
author:"Brice Media",
views:"55K",
content:"Ocean exploration continues revealing new species and scientific information."
},


{
id:8,
category:"Science",
title:"Future Technologies Change Scientific Research",
description:"New tools help scientists make faster discoveries.",
image:"images/future-science.jpg",
date:"August 2026",
author:"Brice Media",
views:"60K",
content:"Advanced technologies are helping researchers solve complex problems."
}


];



const newsContainer = document.getElementById("news-container");


if(newsContainer){


scienceNews.forEach(news=>{


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
