const celebritiesNews = [

{
id:1,
category:"Celebrities",
title:"Taylor Swift Continues Global Success",
description:"Taylor Swift remains one of the most influential artists in the world.",
image:"images/taylor-swift.jpg",
date:"August 2026",
author:"Brice Media",
views:"120K",
content:"Taylor Swift continues breaking records with her music, performances and worldwide popularity."
},


{
id:2,
category:"Celebrities",
title:"Rihanna Expands Her Global Brand Empire",
description:"Rihanna continues growing her business and entertainment career.",
image:"images/rihanna.jpg",
date:"August 2026",
author:"Brice Media",
views:"85K",
content:"Rihanna has become a global icon through music, fashion and successful business projects."
},


{
id:3,
category:"Celebrities",
title:"Kim Kardashian Launches New Projects",
description:"Kim Kardashian continues building her entertainment and business presence.",
image:"images/kim-kardashian.jpg",
date:"August 2026",
author:"Brice Media",
views:"90K",
content:"Kim Kardashian remains one of the most recognized celebrities with millions of followers worldwide."
},


{
id:4,
category:"Celebrities",
title:"Selena Gomez Shares New Entertainment Updates",
description:"Selena Gomez continues inspiring fans through music, acting and media projects.",
image:"images/selena-gomez.jpg",
date:"August 2026",
author:"Brice Media",
views:"75K",
content:"Selena Gomez continues her successful career in entertainment and creative projects."
},


{
id:5,
category:"Celebrities",
title:"Dwayne Johnson Returns With New Hollywood Projects",
description:"The Rock continues starring in major entertainment productions.",
image:"images/the-rock.jpg",
date:"August 2026",
author:"Brice Media",
views:"110K",
content:"Dwayne Johnson remains one of Hollywood's most popular and successful stars."
},


{
id:6,
category:"Celebrities",
title:"Beyonce Announces New Entertainment Projects",
description:"Beyonce continues creating global excitement among fans.",
image:"images/beyonce.jpg",
date:"August 2026",
author:"Brice Media",
views:"95K",
content:"Beyonce continues influencing music, culture and entertainment worldwide."
},


{
id:7,
category:"Celebrities",
title:"Famous Stars Attend Major Awards Events",
description:"Top celebrities gather at international entertainment ceremonies.",
image:"images/celebrity-awards.jpg",
date:"August 2026",
author:"Brice Media",
views:"65K",
content:"Awards events continue celebrating the biggest names in entertainment."
},


{
id:8,
category:"Celebrities",
title:"Hollywood Stars Dominate Social Media",
description:"Celebrity influence continues growing across digital platforms.",
image:"images/social-media-stars.jpg",
date:"August 2026",
author:"Brice Media",
views:"70K",
content:"Famous personalities use social media to connect with millions of fans."
}


];



const newsContainer = document.getElementById("news-container");


if(newsContainer){


celebritiesNews.forEach(news=>{


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
