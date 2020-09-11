/**
 * submitNewPost function to submit form data to the API 
 */

const API_URL = "http://localhost:3000/api/posts";

const submitNewPost = () => {
    // Use FormData to store data to send over
    // Redirect the user to home page after successful submission
    const image = document.getElementById("form-post-image").files[0];
    const title = document.getElementById("form-post-title").value;
    const content = document.getElementById("form-post-content").value;

    //console.log(image);

    let myData = new FormData();
    myData.append("post-image", image);
    myData.append("title", title);
    myData.append("content", content);

    fetch(API_URL, {
        method: 'POST',
        body: myData
    }).then(() => {
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 1000);
    })
}