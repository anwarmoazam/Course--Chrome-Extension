let contextMenuItem = {
    "id": "spendMoney",
    "title": "Spend Money",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickedData){
    console.log('Clicked context',clickedData);
    if(clickedData.menuItemId === 'spendMoney' && clickedData.selectionText){
        if(!isNaN(Number(clickedData.selectionText))){
            chrome.storage.sync.get(['total','limit'],function(budget){
                let newTotal = 0;
                if(budget.total){
                    newTotal += Number(budget.total)
                }
                newTotal += Number(clickedData.selectionText);
                chrome.storage.sync.set({'total': newTotal});
            })
        }
    }
    // chrome.storage.sync.get()
})