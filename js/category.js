/*====================================
BRICE MEDIA
CATEGORY PAGE
====================================*/

const container = document.getElementById("news-container");

if (!container) {
    console.log("news-container not found");
} else {

    // نام پوشه فعلی (technology, sports, ...)
    const currentCategory =
        window.location.pathname
        .split("/")
        .filter(Boolean)
        .pop()
        .toLowerCase();

    // تبدیل نام پوشه به نام دسته
    const categoryMap = {
        technology: "Technology",
        sports: "Sports",
        wealth: "Business",
        celebrities: "Celebrities",
        news: "News"
    };

    const categoryName = categoryMap[currentCategory];

    const filteredNews = newsData.filter(news => news.category === categoryName);

    if (filteredNews.length === 0) {

        container.innerHTML = `
            <h2 style="text-align:center;padding:40px;color:#999;">
                No News Available
            </h2>
        `;

    } else {

        filteredNews.forEach(news => {

            container.innerHTML += `
            <div class="news-card">

                <img src="../${news.image}" alt="${news.title}">

                <div class="news-content">

                    <span>${news.category}</span>

                    <h3>${news.title}</h3>

                    <p>${news.description}</p>

                    <small>
                        📅 ${news.date}
                        &nbsp;&nbsp;
                        ✍ ${news.author}
                        &nbsp;&nbsp;
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

}
