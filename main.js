document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);

function getTodos() {
    /*axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/todos',
        params: {
            _limits: 5
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err)); */

    
  // fetch('https://jsonplaceholder.typicode.com/posts')
  //      .then((res) => res.json())
  //      .then((data)=> console.log(data));

  axios
  .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(res=>{console.log(res)})
  .catch(err => console.log(err))
  
        
}


function addTodo() {
    /* axios({
        method:'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'New Title',
            completed: false
        }

    })
    .then(res => {console.log(res)})
    .catch(err => console.error(err)); */
    

    axios
    .post('https://jsonplaceholder.typicode.com/todos', {
        title : 'Tino',
        completed : false
    })
    .then(res=> console.log(res.data))
    .catch(err => console.log(err))

}

function updateTodo() {
    // Put & Patch

   /* axios({
        method:'patch',
        url : 'https://jsonplaceholder.typicode.com/todos/1',
        data : {
            title : 'Updated Todo',
            completed : true
        }
    })
    .then(res => console.log(res))
    .catch(err => console.error(err)); */

    axios
    .patch('https://jsonplaceholder.typicode.com/todos/1', {
        title : 'Patched',
        completed : true
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
    
}

function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res))
    .catch(err => console.error(err));
    
}


function getData() {
  /*  axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
    .then(res => {
        console.log(res[0]);
        console.log(res[1]);
    })
    .catch(err => console.error(err)) */

    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20')
    ])
    .then(res => {
        console.log(res[0]);
        console.log(res[1]);
    })
    .catch(err => console.error(err));
}

function customHeaders() {
    
    
}

function errorHandling() {
    
    
}

function cancelToken() {
    
}

function transformResponse(params) {
    
}

// Intercepting requests & Responses

axios.interceptors.request.use(config => {
    console.log(` ${config.method.toUpperCase()} 
    request sent to ${config.url} at ${new Date().getTime()}`);

    return config
    
}, error => {
    return Promise.reject(error);
});