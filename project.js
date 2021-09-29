constbody = document.querySelector('body');
fetch('')
.then(response => {
    return response.json();
})
.then(response =>{
    console.log(response);
})
.catch(err =>{
    console.log(err)
})