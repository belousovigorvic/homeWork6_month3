// 1
const block = document.querySelector('.block')
const btnGroup = document.querySelector('.btn-group')

let count = 0

btnGroup.onclick = (event) => {
    if (event.target.classList.contains('next-btn')) {
        count++
    } else {
        count--
        count <= 1 ? count = 1 : null
    }
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
                <h2>${data.title}</h2>        
                <span>${data.id}</span>
                <h3>${data.completed}</h3>
            `
        })
}

// 2
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))