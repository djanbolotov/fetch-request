const URL = 'https://jsonplaceholder.typicode.com/posts';

async function getData() {
    let main = document.querySelector('.main');
    try {
        const response = await fetch(URL);
        const data = await response.json();
        
        data.forEach(element => {
            main.appendChild(createCard(element));
        });
    } catch (error) {
        main.textContent = "Oops, server has an error: " + error.message;
    }
}

function createCard(element){
    let card = document.createElement('div');
    card.className = 'card';
    let title = document.createElement('h2');
    title.textContent = element.title;
    let body = document.createElement('p');
    body.textContent = element.body;
    let code = document.createElement('h3');
    code.textContent = 'Post code: ' + element.id;
    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(code);
    return card;
}

getData();