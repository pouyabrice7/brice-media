/*====================================
BRICE MEDIA
ARTICLE SYSTEM
====================================*/


/*====================================
GET ARTICLE ID
====================================*/

const params = new URLSearchParams(window.location.search);

const articleId = Number(params.get("id"));


/*====================================
ALL NEWS DATABASES
====================================*/

const allNewsSources = {

    technology: typeof technologyNews !== "undefined"
        ? technologyNews
        : [],

    ai: typeof aiNews !== "undefined"
        ? aiNews
        : [],

    football: typeof footballNews !== "undefined"
        ? footballNews
        : [],

    sports: typeof sportsNews !== "undefined"
        ? sportsNews
        : [],

    business: typeof businessNews !== "undefined"
        ? businessNews
        : [],

    celebrities: typeof celebritiesNews !== "undefined"
        ? celebritiesNews
        : [],

    hollywood: typeof hollywoodNews !== "undefined"
        ? hollywoodNews
        : [],

    bollywood: typeof bollywoodNews !== "undefined"
        ? bollywoodNews
        : [],

    world: typeof worldNews !== "undefined"
        ? worldNews
        : [],

    crypto: typeof cryptoNews !== "undefined"
        ? cryptoNews
        : [],

    science: typeof scienceNews !== "undefined"
        ? scienceNews
        : [],

    health: typeof healthNews !== "undefined"
        ? healthNews
        : [],

    home: typeof newsData !== "undefined"
        ? newsData
        : []

};


/*====================================
DETECT CATEGORY
====================================*/

function detectCategory() {

    const referrer = document.referrer.toLowerCase();

    if (referrer.includes("/football.html"))
        return "football";

    if (referrer.includes("/technology.html"))
        return "technology";

    if (referrer.includes("/ai.html"))
        return "ai";

    if (referrer.includes("/sports.html"))
        return "sports";

    if (referrer.includes("/business.html"))
        return "business";

    if (referrer.includes("/celebrities.html"))
        return "celebrities";

    if (referrer.includes("/hollywood.html"))
        return "hollywood";

    if (referrer.includes("/bollywood.html"))
        return "bollywood";

    if (referrer.includes("/world.html"))
        return "world";

    if (referrer.includes("/crypto.html"))
        return "crypto";

    if (referrer.includes("/science.html"))
        return "science";

    if (referrer.includes("/health.html"))
        return "health";

    return "home";

}


/*====================================
FIND ARTICLE
====================================*/

const detectedCategory = detectCategory();

let article = null;


/*
اول از همان دسته‌ای که کاربر از آن وارد شده
خبر را پیدا می‌کنیم.
*/

if (allNewsSources[detectedCategory]) {

    article = allNewsSources[detectedCategory].find(
        item => Number(item.id) === articleId
    );

}


/*
اگر پیدا نشد، در تمام دسته‌ها جستجو می‌کنیم.
*/

if (!article) {

    for (const category in allNewsSources) {

        const source = allNewsSources[category];

        const found = source.find(
            item => Number(item.id) === articleId
        );

        if (found) {

            article = found;

            break;

        }

    }

}


/*====================================
ARTICLE NOT FOUND
====================================*/

const articlePage = document.querySelector(".article-page");


if (!article) {

    if (articlePage) {

        articlePage.innerHTML = `

        <div class="container">

            <h1>Article Not Found</h1>

            <p>
            Sorry, this article could not be found.
            </p>

            <a href="index.html" class="btn">
            ← Back To Home
            </a>

        </div>

        `;

    }

}


/*====================================
DISPLAY ARTICLE
====================================*/

if (article) {


    /*================================
    PAGE TITLE
    =================================*/

    document.title =
        article.title + " | Brice Media";


    /*================================
    OPEN GRAPH
    =================================*/

    const ogTitle =
        document.querySelector('meta[property="og:title"]');

    const ogDescription =
        document.querySelector('meta[property="og:description"]');

    const ogImage =
        document.querySelector('meta[property="og:image"]');

    const ogUrl =
        document.querySelector('meta[property="og:url"]');


    if (ogTitle) {

        ogTitle.setAttribute(
            "content",
            article.title + " | Brice Media"
        );

    }


    if (ogDescription) {

        ogDescription.setAttribute(
            "content",
            article.description || ""
        );

    }


    if (ogImage) {

        ogImage.setAttribute(
            "content",
            article.image || ""
        );

    }


    if (ogUrl) {

        ogUrl.setAttribute(
            "content",
            window.location.href
        );

    }


    /*================================
    ARTICLE IMAGE
    =================================*/

    const articleImage =
        document.getElementById("article-image");


    if (articleImage) {

        articleImage.src = article.image || "";

        articleImage.alt =
            article.title || "Brice Media";

    }


    /*================================
    CATEGORY
    =================================*/

    const articleCategory =
        document.getElementById("article-category");


    if (articleCategory) {

        articleCategory.textContent =
            article.category || "";

    }


    /*================================
    TITLE
    =================================*/

    const articleTitle =
        document.getElementById("article-title");


    if (articleTitle) {

        articleTitle.textContent =
            article.title || "";

    }


    /*================================
    DATE
    =================================*/

    const articleDate =
        document.getElementById("article-date");


    if (articleDate) {

        articleDate.textContent =
            article.date || "";

    }


    /*================================
    AUTHOR
    =================================*/

    const articleAuthor =
        document.getElementById("article-author");


    if (articleAuthor) {

        articleAuthor.textContent =
            "By " + (article.author || "Brice Media");

    }


    /*================================
    VIEWS
    =================================*/

    const articleViews =
        document.getElementById("article-views");


    if (articleViews) {

        articleViews.textContent =
            (article.views || "") + " Views";

    }


    /*================================
    ARTICLE CONTENT
    =================================*/

    const articleContent =
        document.getElementById("article-content");


    if (articleContent) {

        articleContent.innerHTML = `

        <p>
        ${article.description || ""}
        </p>

        <p>
        ${article.content || ""}
        </p>

        <p>
        Stay connected with Brice Media for the latest
        developments from around the world.
        </p>

        `;

    }

}


/*====================================
SHARE ARTICLE
====================================*/

if (article) {


    const pageUrl =
        window.location.href;


    const encodedUrl =
        encodeURIComponent(pageUrl);


    const encodedTitle =
        encodeURIComponent(article.title || "Brice Media");


    /*================================
    TELEGRAM
    =================================*/

    const telegramBtn =
        document.getElementById("telegram-share");


    if (telegramBtn) {

        telegramBtn.href =
            `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;

    }


    /*================================
    WHATSAPP
    =================================*/

    const whatsappBtn =
        document.getElementById("whatsapp-share");


    if (whatsappBtn) {

        whatsappBtn.href =
            `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;

    }


    /*================================
    COPY LINK
    =================================*/

    const copyBtn =
        document.getElementById("copy-link");


    if (copyBtn) {

        copyBtn.addEventListener("click", async function () {

            try {

                await navigator.clipboard.writeText(pageUrl);

                alert("Link copied!");

            } catch (error) {

                alert("Could not copy the link.");

            }

        });

    }

}


/*====================================
FINISHED
====================================*/

console.log(
    "Brice Media Article:",
    article ? article.title : "NOT FOUND"
);

console.log(
    "Detected Category:",
    detectedCategory
);
