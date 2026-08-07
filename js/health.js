const healthNews = [

{
id:1,
category:"Health",
title:"AI Technology Improves Modern Healthcare",
description:"Artificial intelligence helps doctors improve diagnosis and treatment.",
image:"images/ai-health.jpg",
date:"August 2026",
author:"Brice Media",
views:"95K",
content:"AI technology is transforming healthcare by helping doctors analyze information faster and improve patient care."
},

{
id:2,
category:"Health",
title:"Scientists Discover New Medical Treatments",
description:"Researchers continue developing advanced solutions for diseases.",
image:"images/medical-discovery.jpg",
date:"August 2026",
author:"Brice Media",
views:"85K",
content:"Medical research continues creating new treatments and improving human health."
},

{
id:3,
category:"Health",
title:"Future Of Personalized Medicine",
description:"Healthcare is becoming more personalized through advanced technology.",
image:"images/personalized-medicine.jpg",
date:"August 2026",
author:"Brice Media",
views:"70K",
content:"Personalized medicine uses technology and research to create better healthcare solutions."
},

{
id:4,
category:"Health",
title:"Robots Assist Doctors In Medical Procedures",
description:"Medical robots are becoming more common in hospitals.",
image:"images/medical-robots.jpg",
date:"August 2026",
author:"Brice Media",
views:"65K",
content:"Robotic technology helps doctors perform more accurate and advanced medical procedures."
},

{
id:5,
category:"Health",
title:"New Research On Human Longevity",
description:"Scientists study ways to improve healthy aging.",
image:"images/longevity.jpg",
date:"August 2026",
author:"Brice Media",
views:"80K",
content:"Researchers continue studying genetics, lifestyle and technology to understand human longevity."
},

{
id:6,
category:"Health",
title:"Healthy Lifestyle Becomes A Global Trend",
description:"People around the world focus more on wellness and fitness.",
image:"images/healthy-life.jpg",
date:"August 2026",
author:"Brice Media",
views:"60K",
content:"Healthy nutrition, exercise and mental wellness are becoming important worldwide."
},

{
id:7,
category:"Health",
title:"Wearable Technology Changes Personal Health",
description:"Smart watches and devices help people monitor their health.",
image:"images/wearable-health.jpg",
date:"August 2026",
author:"Brice Media",
views:"55K",
content:"Wearable devices provide users with information about fitness and health conditions."
},

{
id:8,
category:"Health",
title:"Healthcare Technology Continues Growing",
description:"Digital healthcare services expand around the world.",
image:"images/digital-health.jpg",
date:"August 2026",
author:"Brice Media",
views:"75K",
content:"Digital healthcare systems are improving access to medical information and services."
}

];



const newsContainer = document.getElementById("news-container");


if(newsContainer){


healthNews.forEach(news=>{


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
