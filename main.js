document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);

// Axios GLobals
axios.defaults.headers.common['X-Auth-Token'] = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

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
  .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
      timeout : 5000
  })
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
    .then(axios.spread(todos, posts) => console.log(posts)
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
    const config = {
        headers: {
            'content-type' : 'Application/json',
            Authorization : 'sometoken'
    
        }
    }
    
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', config)
    .then(res => { console.log(res)})
    .catch(err => console.error(err));
}

function errorHandling() {
    axios
    .get('https://jsonplaceholder.typicode.com/todoss', {
        validateStatus : function(status){
            return status < 500; // Reject only if status is greater than
        }
    })
    .then(res => console.log(res))
    .catch(err => {
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);

            if (err.response.status === 404) {
                alert('Error: Page Not Found')
            }

        }else if(err.request){
            // Request was made but no response
            console.error(err.request);
        }else{
            console.error(err.message);
        }
    });
}

function cancelToken() {
    const source = axios.CancelToken.source();

    axios
    .get('https://jsonplaceholder.typicode.com/todos', {
        cancelToken : source.token
    })
    .then(res=> {console.log(res)})
    .catch(thrown => {
        if(axios.isCancel(thrown)) {
            console.log('Request canceled', thrown.message);
        }
    });

    if (true) {
        source.cancel('Cancelled!')
    }
    
}

function transformResponse() {
    const options = {
        method : 'post',
        url :'https://jsonplaceholder.typicode.com/todos',
        data : {
            title : "picnic panic"
        },
        transformResponse : axios.defaults.transformResponse.concat(data => {
            data.title = data.title.toUpperCase();
            return data;
        })
    }
    axios(options).then(res=>{console.log(res)});
}

// Intercepting requests & Responses

axios.interceptors.request.use(config => {
    console.log(` ${config.method.toUpperCase()} 
    request sent to ${config.url} at ${new Date().getTime()}`);

    return config
    
}, error => {
    return Promise.reject(error);
});

// Axios Instances

/* const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

axiosInstance
.get('/comments')
.then(res => {console.log(res)})
.catch(err => {
    if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) {
            alert('Error: Page Not Found')
        }

    }else if(err.request){
        // Request was made but no response
        console.error(err.request);
    }else{
        console.error(err.message);
    }
}); 

*/