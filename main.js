const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postList = document.getElementById("post-container")

const renderPosts = posts.map((post) => {
    return`
        <section class="post">
                 <div class="post-header">
                     <img src="${post.avatar}" alt="${post.name}" class="avatar">
                     <div>
                         <h2>${post.name}</h2>
                         <p>${post.location}</p>
                     </div>
                 </div>

                 <div class="post-img">
                     <img src="${post.post}" alt="Van Gogh selfie" class="post-img">
                 </div>

                 <div class="actions">
                     <img class="icon" src="images/icon-heart.png" alt="heart icon">
                     <img class="icon" src="images/icon-comment.png" alt="comment icon">
                     <img class="icon" src="images/icon-dm.png" alt="direct message icon">
                 </div>

                 <div class="comments">
                     <p>${post.likes} <span>likes</span></p>
                     <p><span>${post.username} </span>${post.comment}</p>
                 </div>
             </section>
    `
}).join("")

postList.innerHTML = renderPosts

// function renderPosts() {

//     for (let i = 0; i < posts.length; i++) {

//         console.log(posts[i])

//         postList.innerHTML += `
//             <section class="post">
//                 <div class="post-header">
//                     <img src="${posts.avatar}" alt="${posts.name}" class="avatar">
//                     <div>
//                         <h2>${posts.name}</h2>
//                         <p>${posts.location}</p>
//                     </div>
//                 </div>

//                 <div class="post-img">
//                     <img src="${posts.post}" alt="Van Gogh selfie" class="post-img">
//                 </div>

//                 <div class="actions">
//                     <img class="icon" src="images/icon-heart.png" alt="">
//                     <img class="icon" src="images/icon-comment.png" alt="">
//                     <img class="icon" src="images/icon-dm.png" alt="">
//                 </div>

//                 <div class="comments">
//                     <p>${posts.likes}</p>
//                     <p><span>${posts.username}</span>${posts.comment}</p>
//                 </div>
//             </section>
//         `
//     }
// }

// renderPosts()
