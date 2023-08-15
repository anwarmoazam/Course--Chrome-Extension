const button = document.getElementById('spendAmount');
let total = document.getElementById('total');
let limit = document.getElementById('limit');


chrome.storage.sync.get(['total', 'limit'], function (budget) {
    total.innerText = budget.total || 0;
    limit.innerText = budget.limit || 0;
})

button.addEventListener('click', updateTotal);

function updateTotal() {
    chrome.storage.sync.get(['total', 'limit'], function (budget) {
        let newTotal = 0;
        if (budget.total) {
            newTotal += parseInt(budget.total);
        }
        let amount = document.getElementById('amount').value;
        if (amount) {
            newTotal += parseInt(amount);
        }
        chrome.storage.sync.set({ 'total': newTotal }, function () {
            if (amount && newTotal >= budget.limit) {
                let notifOptions = {
                    type: 'basic',
                    iconUrl: 'icon48.png',
                    title: 'Limit reached!',
                    message: "Uh uh! Looks like you've reached your limit!"
                };
                chrome.notifications.create('limitNotif', notifOptions);
            }
        });
        total.innerText = newTotal;
        document.getElementById('amount').value = '';
    })
}
