const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    // console.log(user)
    const idTag = document.getElementById('id')
    idTag.innerHTML = user[0].id
    
    // 
    const nameTag = document.getElementById('name')
    nameTag.innerHTML = user[0].name
    // 
    const email = document.getElementById('email')
    email.innerHTML = user[0].email
    // 
    const geo = document.getElementById('geo')
    geo.innerHTML = user[0].address.zipcode

}

loadUser();
