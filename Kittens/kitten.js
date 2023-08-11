console.log("Kittens of the world, unite as one!");

let fileNames = [
    "alexander-london-mJaD10XeD7w-unsplash.jpg",
    "andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg",
    "leonsa-fVNyjet1CXY-unsplash.jpg",
    "loan-7AIDE8PrvA0-unsplash.jpg",
    "manja-vitolic-gKXKBY-C-Dk-unsplash.jpg",
    "the-lucky-neko-rplhB9mYF48-unsplash.jpg",
    "tran-mau-tri-tam-wiqbi_Uyvx8-unsplash.jpg"
]

let imgs = document.getElementsByTagName('img');

for (let imgElement of imgs) {
    let r = Math.floor(Math.random() * fileNames.length);
    let file = 'imgs/' + fileNames[r];
    let url = chrome.extension.getURL(file);
    imgElement.src = url;
    // console.log(src);
}