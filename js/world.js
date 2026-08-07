const worldNews = [

{
id:1,
category:"World",
title:"Global Leaders Discuss Future International Cooperation",
description:"World leaders continue working on important global challenges.",
image:"images/world-leaders.jpg",
date:"August 2026",
author:"Brice Media",
views:"85K",
content:"International cooperation remains important as countries face economic, technological and environmental challenges."
},

{
id:2,
category:"World",
title:"United States Announces New Global Initiatives",
description:"The US continues developing policies affecting global markets and technology.",
image:"images/usa-news.jpg",
date:"August 2026",
author:"Brice Media",
views:"90K",
content:"The United States remains one of the most influential countries in global politics and economy."
},

{
id:3,
category:"World",
title:"Europe Focuses On Economic Growth And Innovation",
description:"European countries invest in technology and sustainable development.",
image:"images/europe-news.jpg",
date:"August 2026",
author:"Brice Media",
views:"65K",
content:"European nations continue improving economic cooperation and innovation."
},

{
id:4,
category:"World",
title:"Asia Becomes Center Of Global Technology Growth",
description:"Asian countries continue leading innovation and manufacturing.",
image:"images/asia-news.jpg",
date:"August 2026",
author:"Brice Media",
views:"78K",
content:"Asia plays a major role in technology, business and global economic growth."
},

{
id:5,
category:"World",
title:"Middle East Developments Attract Global Attention",
description:"Important regional events continue influencing international relations.",
image:"images/middle-east.jpg",
date:"August 2026",
author:"Brice Media",
views:"72K",
content:"The Middle East remains an important region for energy, politics and global affairs."
},

{
id:6,
category:"World",
title:"Global Economy Faces New Changes",
description:"Markets around the world respond to new economic conditions.",
image:"images/global-economy.jpg",
date:"August 2026",
author:"Brice Media",
views:"60K",
content:"The global economy continues changing as businesses and governments adapt."
},

{
id:7,
category:"World",
title:"Climate Change Becomes A Major Global Topic",
description:"Countries work on solutions for environmental challenges.",
image:"images/climate-change.jpg",
date:"August 2026",
author:"Brice Media",
views:"55K",
content:"Climate change remains one of the biggest challenges facing the world."
},

{
id:8,
category:"World",
title:"Space Exploration Creates Global Excitement",
description:"Countries and companies continue exploring space technology.",
image:"images/space-world.jpg",
date:"August 2026",
author:"Brice Media",
views:"70K",
content:"Space exploration continues advancing with new missions and discoveries."
}


];



const newsContainer = document.getElementById("news-container");


if(newsContainer){


worldNews.forEach(news=>{


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
