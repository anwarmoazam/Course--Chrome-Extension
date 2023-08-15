const saveLimitBtn = document.getElementById('saveLimit');
const resetTotalBtn = document.getElementById('resetTotal');

saveLimitBtn.addEventListener('click', saveLimit);
resetTotalBtn.addEventListener('click', resetTotal);

chrome.storage.sync.get('limit', function (budget) {
    document.getElementById('limit').value = budget.limit || 0;
})

function saveLimit() {
    let limit = document.getElementById('limit').value;
    if (limit) {
        chrome.storage.sync.set({ 'limit': limit }, function () {
            close();
        });
    }
}

function resetTotal() {
    chrome.storage.sync.set({ 'total': 0 },function(){
        let notifOptions = {
            type: 'basic',
            iconUrl:'icon48.png',
            title: 'Total set to Zero',
            message: "You've set total to Zero"
        }
        chrome.notifications.create('limitZero',notifOptions);
    });
}
