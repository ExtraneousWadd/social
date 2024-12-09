async function getUser(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return user;
}






getUser()
.then(user => {
    for(let i = 0; i < 3; i++){
    document.getElementById("user" + i).innerText = JSON.stringify(user);
    console.log("user displayed")
    }
})
.catch(error => {
    console.log("error")
}
);
