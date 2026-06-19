function displayNews(articles) {

    newsContainer.innerHTML = "";

    if (!articles || articles.length === 0) {

        newsContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning">
                    No news found.
                </div>
            </div>
        `;

        return;
    }

    articles.forEach(article => {

        newsContainer.innerHTML += `
            <div class="col-md-4 mb-4">

                <div class="card h-100 shadow-sm">

                    <img
                        src="${article.urlToImage || 'https://via.placeholder.com/300'}"
                        class="card-img-top"
                        alt="News Image"
                    >

                    <div class="card-body">

                        <h5 class="card-title">
                            ${article.title || "No Title"}
                        </h5>

                        <p class="card-text">
                            ${article.description || "No description available"}
                        </p>

                        <a
                            href="${article.url}"
                            target="_blank"
                            class="btn btn-primary"
                        >
                            Read More
                        </a>

                    </div>

                </div>

            </div>
        `;
    });
}
