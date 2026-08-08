const footballNews = [

{
id:1,
category:"Football",
title:"Cristiano Ronaldo Continues Making Football History",
description:"Cristiano Ronaldo remains one of the biggest football stars in the world with new records and achievements.",
image:"../images/ronaldo.jpg",
date:"August 2026",
author:"Brice Media",
views:"95K",
content:"Cristiano Ronaldo continues his legendary football career, inspiring millions of fans around the world with his dedication, goals and achievements."
},


{
id:2,
category:"Football",
title:"Lionel Messi Creates More Magical Football Moments",
description:"Lionel Messi continues to impress fans with his skills, vision and incredible performances.",
image:"../images/messi.jpg",
date:"August 2026",
author:"Brice Media",
views:"92K",
content:"Lionel Messi remains one of football's greatest players, continuing to create unforgettable moments on the pitch."
},


{
id:3,
category:"Football",
title:"Ronaldo vs Messi: The Greatest Football Rivalry Ever",
description:"The legendary competition between Cristiano Ronaldo and Lionel Messi changed modern football forever.",
image:"../images/ronaldo-messi.jpg",
date:"August 2026",
author:"Brice Media",
views:"120K",
content:"For more than a decade, Ronaldo and Messi pushed each other to new levels and created one of the greatest rivalries in sports history."
},


{
id:4,
category:"Football",
title:"Kylian Mbappe Becomes The New Generation Superstar",
description:"Mbappe continues leading the next generation of world football stars.",
image:"../images/mbappe.jpg",
date:"August 2026",
author:"Brice Media",
views:"75K",
content:"Kylian Mbappe is considered one of the most talented footballers of his generation."
},


{
id:5,
category:"Football",
title:"Erling Haaland Breaks More Goal Records",
description:"The Norwegian striker continues his incredible goal scoring journey.",
image:"../images/haaland.jpg",
date:"August 2026",
author:"Brice Media",
views:"80K",
content:"Erling Haaland continues dominating defenders with his power, speed and finishing ability."
},


{
id:6,
category:"Football",
title:"Champions League Brings The Biggest Football Battles",
description:"Top European clubs compete for the most prestigious football trophy.",
image:"../images/champions-league.jpg",
date:"August 2026",
author:"Brice Media",
views:"70K",
content:"The Champions League remains one of the most watched football competitions worldwide."
},


{
id:7,
category:"Football",
title:"World Cup Football Creates Global Excitement",
description:"Fans around the world follow the biggest international football tournament.",
image:"../images/world-cup.jpg",
date:"August 2026",
author:"Brice Media",
views:"110K",
content:"The FIFA World Cup brings together the best teams and players from around the world."
},


{
id:8,
category:"Football",
title:"Top Football Clubs Prepare For Major Transfers",
description:"The biggest clubs continue searching for world-class players.",
image:"../images/football-transfer.jpg",
date:"August 2026",
author:"Brice Media",
views:"65K",
content:"Transfer news remains one of the most popular topics among football fans."
},


{
id:9,
category:"Football",
title:"Young Football Talents Ready To Become Stars",
description:"New football talents are attracting attention from major clubs.",
image:"../images/young-football.jpg",
date:"August 2026",
author:"Brice Media",
views:"45K",
content:"The next generation of players is preparing to become future football legends."
},


{
id:10,
category:"Football",
title:"Football Technology Changes The Modern Game",
description:"VAR, AI and advanced analytics are transforming football.",
image:"../images/football-technology.jpg",
date:"August 2026",
author:"Brice Media",
views:"40K",
content:"Technology continues changing how football matches are played, analyzed and managed."
}

];


const footballContainer = document.getElementById("football-container");


if(footballContainer){


footballNews.forEach(news=>{


footballContainer.innerHTML += `


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
