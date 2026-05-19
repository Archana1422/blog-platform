function publishPost() {

    let title = document.getElementById("title").value;

    let content = document.getElementById("content").value;

    let posts = document.getElementById("posts");

    posts.innerHTML += `
        <div class="post">
            <h2>${title}</h2>
            <p>${content}</p>
        </div>
    `;
}