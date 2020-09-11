const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}

const getPostIdParam = () => {
    const querystr = window.location.search;
    const url = new URLSearchParams(querystr);
    return url.get("id");
}

const getPost = () => {
    const postId =  getPostIdParam();
    const Link = `${API_URL}${postId}`;
    fetch(Link, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        buildPost(data);
    })
}

const buildPost = (data) => {
    const postImage = `${API_BASE_URL}${data.post_image}`;
    const postDate = new Date(parseInt(data.added_date)).toDateString();

    document.querySelector("header").style.backgroundImage = `url(${postImage})`;
    document.querySelector('.post-container').innerHTML = `
    <div id="individual-post-title">${data.title}</div>
    <div id="individual-post-date">Published on ${postDate}</div>
    <div id="individual-post-content">${data.content}</div>
    `
}

