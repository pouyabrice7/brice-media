const aiNews = [

{
id:1,
category:"AI",
title:"OpenAI Introduces Next Generation AI Model",
description:"OpenAI announced a powerful new artificial intelligence model with improved reasoning and performance.",
image:"images/openai-ai.jpg",
date:"August 2026",
author:"Brice Media",
views:"45K",
content:"OpenAI continues developing advanced AI systems with better reasoning, speed and accuracy for users worldwide."
},

{
id:2,
category:"AI",
title:"Google Gemini AI Receives Major Upgrade",
description:"Google improves Gemini with smarter responses and advanced multimodal capabilities.",
image:"images/gemini-ai.jpg",
date:"August 2026",
author:"Brice Media",
views:"38K",
content:"Google's Gemini AI platform receives new features designed to improve productivity, creativity and daily assistance."
},

{
id:3,
category:"AI",
title:"Microsoft Expands Copilot AI Features",
description:"Microsoft adds new artificial intelligence tools across Windows and Office products.",
image:"images/copilot-ai.jpg",
date:"August 2026",
author:"Brice Media",
views:"32K",
content:"Microsoft continues integrating AI assistants into business and personal productivity software."
},

{
id:4,
category:"AI",
title:"Tesla Develops Advanced Humanoid AI Robots",
description:"Tesla continues improving intelligent robots powered by artificial intelligence.",
image:"images/tesla-ai-robot.jpg",
date:"August 2026",
author:"Brice Media",
views:"41K",
content:"Tesla's AI robotics projects aim to create smarter machines capable of assisting humans in different industries."
},

{
id:5,
category:"AI",
title:"AI Assistants Become More Human And Intelligent",
description:"Next generation AI assistants are becoming faster and more natural in conversations.",
image:"images/ai-assistant.jpg",
date:"August 2026",
author:"Brice Media",
views:"35K",
content:"Artificial intelligence assistants are expected to become essential tools for communication and daily tasks."
},

{
id:6,
category:"AI",
title:"Artificial Intelligence Transforms Healthcare",
description:"AI helps doctors analyze medical data and improve patient care.",
image:"images/ai-healthcare.jpg",
date:"August 2026",
author:"Brice Media",
views:"29K",
content:"Healthcare organizations are adopting AI technologies to improve diagnosis and treatment."
},

{
id:7,
category:"AI",
title:"AI Revolution Changes The Future Of Education",
description:"Schools and universities are using artificial intelligence for personalized learning.",
image:"images/ai-education.jpg",
date:"August 2026",
author:"Brice Media",
views:"27K",
content:"AI-powered education platforms provide smarter learning experiences for students worldwide."
},

{
id:8,
category:"AI",
title:"AI Creates New Opportunities In Business",
description:"Companies invest in artificial intelligence to improve efficiency and innovation.",
image:"images/ai-business.jpg",
date:"August 2026",
author:"Brice Media",
views:"36K",
content:"Businesses worldwide are using AI solutions to automate processes and create new services."
},

{
id:9,
category:"AI",
title:"Future Of Generative AI Continues Growing",
description:"Generative artificial intelligence expands into art, software and content creation.",
image:"images/generative-ai.jpg",
date:"August 2026",
author:"Brice Media",
views:"43K",
content:"Generative AI is changing how people create images, videos, software and digital content."
},

{
id:10,
category:"AI",
title:"Scientists Develop More Powerful AI Systems",
description:"Researchers are creating advanced AI models with better understanding and learning abilities.",
image:"images/future-ai-research.jpg",
date:"August 2026",
author:"Brice Media",
views:"31K",
content:"Scientists continue researching artificial intelligence to build safer and more capable systems."
}

];

const newsContainer = document.getElementById("news-container");


if(newsContainer){


AiNews.forEach(news=>{


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
