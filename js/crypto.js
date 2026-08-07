const cryptoNews = [

{
id:1,
category:"Crypto",
title:"Bitcoin Reaches New Milestones In Digital Finance",
description:"Bitcoin continues to be the most recognized cryptocurrency worldwide.",
image:"images/bitcoin.jpg",
date:"August 2026",
author:"Brice Media",
views:"120K",
content:"Bitcoin remains the leading cryptocurrency and continues influencing the future of digital finance."
},

{
id:2,
category:"Crypto",
title:"Ethereum Expands Blockchain Technology",
description:"Ethereum continues improving smart contracts and decentralized applications.",
image:"images/ethereum.jpg",
date:"August 2026",
author:"Brice Media",
views:"95K",
content:"Ethereum remains one of the most important blockchain platforms for developers and digital projects."
},

{
id:3,
category:"Crypto",
title:"Binance Continues Growing Global Crypto Services",
description:"The cryptocurrency exchange expands its digital asset ecosystem.",
image:"images/binance.jpg",
date:"August 2026",
author:"Brice Media",
views:"85K",
content:"Binance remains one of the largest cryptocurrency platforms in the world."
},

{
id:4,
category:"Crypto",
title:"Blockchain Technology Moves Beyond Cryptocurrency",
description:"Companies use blockchain in finance, healthcare and global industries.",
image:"images/blockchain-crypto.jpg",
date:"August 2026",
author:"Brice Media",
views:"70K",
content:"Blockchain technology continues finding new applications beyond traditional cryptocurrencies."
},

{
id:5,
category:"Crypto",
title:"Web3 Creates New Digital Opportunities",
description:"Web3 technologies continue changing online experiences.",
image:"images/web3.jpg",
date:"August 2026",
author:"Brice Media",
views:"55K",
content:"Web3 aims to create a more decentralized internet using blockchain technologies."
},

{
id:6,
category:"Crypto",
title:"NFT Market Evolves With New Digital Projects",
description:"Digital collectibles continue developing in the creative industry.",
image:"images/nft.jpg",
date:"August 2026",
author:"Brice Media",
views:"48K",
content:"NFT technology continues influencing digital art, gaming and online ownership."
},

{
id:7,
category:"Crypto",
title:"Crypto Companies Invest In Artificial Intelligence",
description:"AI and blockchain technologies are becoming more connected.",
image:"images/ai-crypto.jpg",
date:"August 2026",
author:"Brice Media",
views:"62K",
content:"The combination of artificial intelligence and blockchain creates new possibilities."
},

{
id:8,
category:"Crypto",
title:"Future Of Digital Currency Continues Changing",
description:"Governments and companies study the future of digital finance.",
image:"images/digital-currency.jpg",
date:"August 2026",
author:"Brice Media",
views:"65K",
content:"Digital currencies continue becoming an important topic in global financial discussions."
}


];



const newsContainer = document.getElementById("news-container");


if(newsContainer){


cryptoNews.forEach(news=>{


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
