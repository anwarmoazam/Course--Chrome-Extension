console.log('Chrome extension go');



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendResponse){
    if(message.txt === 'Hello'){
        let paragraphs = document.getElementsByTagName('p');
        for(let element of paragraphs){
            element.style.backgroundColor = '#FF00FF';
        }
    }
}