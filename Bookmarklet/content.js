console.log('Chrome extension go');

let paragraphs = document.getElementsByTagName('p');

for(let paragraph of paragraphs){
    paragraph.innerText = "Kitten";
}