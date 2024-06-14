// script.js

document.addEventListener("DOMContentLoaded", function () {
    const articlesContainer = document.getElementById("articles-container");
    const commentInput = document.getElementById("comment-input");
    const commentSubmit = document.getElementById("comment-submit");

    let articles = [
        {
            title: "First Article",
            content: "This is the content of the first article.",
            comments: []
        }
    ];

    function renderArticles() {
        articlesContainer.innerHTML = "";

        articles.forEach((article, index) => {
            const articleDiv = document.createElement("div");
            articleDiv.className = "article";

            const title = document.createElement("h2");
            title.textContent = article.title;

            const content = document.createElement("p");
            content.textContent = article.content;

            const commentList = document.createElement("div");
            commentList.className = "comment-list";

            article.comments.forEach((comment) => {
                const commentDiv = document.createElement("div");
                commentDiv.className = "comment";
                commentDiv.textContent = comment;
                commentList.appendChild(commentDiv);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(content);
            articleDiv.appendChild(commentList);

            articlesContainer.appendChild(articleDiv);
        });
    }

    commentSubmit.addEventListener("click", function () {
        if (commentInput.value.trim()) {
            articles[0].comments.push(commentInput.value);
            commentInput.value = "";
            renderArticles();
        }
    });

    renderArticles();
});
