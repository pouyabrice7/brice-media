/*====================================
FOOTBALL CATEGORY PAGE
BRICE MEDIA
====================================*/

const footballContainer =
    document.getElementById("football-container");

if (footballContainer && typeof footballNews !== "undefined") {

    footballNews.forEach(news => {

        footballContainer.innerHTML += `

        <div class="news-card">

            <img
                src="${news.image}"
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
                    &nbsp;&nbsp;
                    ✍ ${news.author}
                    &nbsp;&nbsp;
                    👁 ${news.views}
                </small>

                <br><br>

                <a
                    href="../article.html?id=${news.id}"
                    class="btn"
                >
                    Read More
                </a>

            </div>

        </div>

        `;

    });

}
