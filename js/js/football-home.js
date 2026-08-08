/*====================================
BRICE MEDIA
FOOTBALL HOME NEWS RENDER
====================================*/

const footballHomeContainer =
    document.getElementById("football-home-container");


if (footballHomeContainer && typeof footballNews !== "undefined") {


    footballNews.forEach(news => {


        const card = document.createElement("div");

        card.classList.add("news-card");


        /*
        چون football.js برای صفحه categories ساخته شده،
        مسیر ../images را برای صفحه اصلی اصلاح می‌کنیم.
        */

        const imagePath =
            news.image.replace("../images/", "images/");


        card.innerHTML = `

        <img
            src="${imagePath}"
            alt="${news.title}"
        >

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

            <a
                href="article.html?id=${news.id}"
                class="btn"
            >
                Read More
            </a>

        </div>

        `;


        footballHomeContainer.appendChild(card);


    });


}
