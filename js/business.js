const businessNews = [

{
id:1,
category:"Business",
title:"Elon Musk Leads New Era Of Technology Business",
description:"Elon Musk continues expanding his companies across technology, energy and artificial intelligence.",
image:"images/elon-musk-business.jpg",
date:"August 2026",
author:"Brice Media",
views:"95K",
content:"Elon Musk's companies continue influencing industries including electric vehicles, space technology and artificial intelligence."
},

{
id:2,
category:"Business",
title:"Tesla Expands Electric Vehicle Market Worldwide",
description:"Tesla continues growing its global electric vehicle business with new innovations.",
image:"images/tesla-business.jpg",
date:"August 2026",
author:"Brice Media",
views:"82K",
content:"Tesla remains one of the world's most recognized electric vehicle companies."
},

{
id:3,
category:"Business",
title:"Apple Becomes One Of The World's Most Valuable Companies",
description:"Apple continues its growth through technology products and services.",
image:"images/apple-business.jpg",
date:"August 2026",
author:"Brice Media",
views:"88K",
content:"Apple continues expanding its ecosystem with innovative products and digital services."
},

{
id:4,
category:"Business",
title:"Microsoft Expands Global Cloud And AI Business",
description:"Microsoft invests heavily in cloud computing and artificial intelligence.",
image:"images/microsoft-business.jpg",
date:"August 2026",
author:"Brice Media",
views:"76K",
content:"Microsoft continues strengthening its position in global technology markets."
},

{
id:5,
category:"Business",
title:"Amazon Grows Through Global E-Commerce And Cloud Services",
description:"Amazon continues expanding its online shopping and cloud computing businesses.",
image:"images/amazon-business.jpg",
date:"August 2026",
author:"Brice Media",
views:"70K",
content:"Amazon Web Services remains one of the biggest cloud platforms worldwide."
},

{
id:6,
category:"Business",
title:"Global Markets Watch Economic Changes",
description:"Investors follow major economic developments around the world.",
image:"images/global-market.jpg",
date:"August 2026",
author:"Brice Media",
views:"55K",
content:"Global markets continue changing as companies and governments respond to economic trends."
},

{
id:7,
category:"Business",
title:"Top Companies Invest In Artificial Intelligence",
description:"Businesses worldwide increase investment in AI technologies.",
image:"images/business-ai.jpg",
date:"August 2026",
author:"Brice Media",
views:"64K",
content:"Artificial intelligence has become a major focus for global companies."
},

{
id:8,
category:"Business",
title:"New Startups Create The Future Of Innovation",
description:"Startup companies introduce new ideas in technology and services.",
image:"images/startup-business.jpg",
date:"August 2026",
author:"Brice Media",
views:"42K",
content:"Innovative startups continue creating new solutions for global markets."
},

{
id:9,
category:"Business",
title:"Luxury Brands Expand International Markets",
description:"Major luxury companies continue attracting customers worldwide.",
image:"images/luxury-business.jpg",
date:"August 2026",
author:"Brice Media",
views:"50K",
content:"Luxury brands are expanding through digital transformation and global marketing."
},

{
id:10,
category:"Business",
title:"Future Of Global Business Is Changing",
description:"Companies are adapting to new technologies and modern economic trends.",
image:"images/future-business.jpg",
date:"August 2026",
author:"Brice Media",
views:"60K",
content:"The future of business will be shaped by technology, innovation and global cooperation."
}

];



const newsContainer = document.getElementById("news-container");


if(newsContainer){


businessNews.forEach(news=>{


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
