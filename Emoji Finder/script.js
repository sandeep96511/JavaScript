let input = document.querySelector('input');
let container = document.querySelector('.container');

//todo ---------- Load all the emojis on UI ----------
window.addEventListener('load', function(e){
    emojiList.forEach((element) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <p class= "emoji"> ${element.emoji} </p>
        <p class = "name"> ${element.aliases.join(", ")} </p>
        <p class = "name"> ${element.description} </p>

        `;
        div.classList.add('emojis');
        container.appendChild(div);
    });
});

//todo ---------- Search & filter the emojis ----------
input.addEventListener('keyup', function(e){
    let value = e.target.value.toLowerCase();  

    let filterArr = emojiList.filter((element) => {
        return element.aliases[0].toLowerCase().includes(value);
    });

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < filterArr.length; i++){
        let emoji = filterArr[i].emoji;
        let aliases = filterArr[i].aliases[0];

        let div = document.createElement('div');
        div.innerHTML = `
        <p class= "emoji"> ${emoji} </p>
        <p class = "name"> ${aliases} </p>
        `;
        div.classList.add('emojis');
        container.appendChild(div);
    }
});