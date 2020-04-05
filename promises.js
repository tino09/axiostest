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

function createPosts(post) {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            }else{
                reject('Error : Something went wrong')
            }
        }, 2000)
    })
    }
    
    //createPosts({title: 'post X' , body:'this is post X'})
    //.then(getPosts)
    //.catch(err => console.log(err));

    //Async / Await

    async function init(){
       await  createPosts({
            title:'one', body:'nine'
        });
        getPosts();
    }

    init();

    async function fetchUsers(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await res.json();

        console.log(data);
    }

    fetchUsers();

    /* Promise.all
    const promise1 = Promise.resolve('Hello world');
    const promise2 = 10;
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'Goodbye')
    });
    const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    
    Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
    */

