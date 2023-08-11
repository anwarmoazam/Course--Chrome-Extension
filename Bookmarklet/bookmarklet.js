(function(){
    console.log('Bookmarlet starting');
    let paragraphs = document.getElementsByTagName('p');
    for(let paragraph of paragraphs){
        paragraph.innerHTML = 'kitten';
    }
})();

(function(){
    let script = document.createElement('script');
    script.src = 'bookmarklet.js';
    document.body.appendChild(script);
})();

// (function(){let script = document.createElement('script');script.src = 'bookmarklet.js';document.body.appendChild(script);})();