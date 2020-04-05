const posts = [
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];

function getPosts(){
    setTimeout(() =>{
        let output = "";
        posts.forEach((posts, index) =>{
             output += `<li>${posts.title}</li>`;
        });
        document.getElementById('res').innerHTML = output;
    }, 1000);
}

function createPosts(post, callback) {
    setTimeout(() =>{
        posts.push(post);
        callback();
    }, 2000);
}


createPosts({
        title : 'post three', body: 'this is post three'
}, getPosts);