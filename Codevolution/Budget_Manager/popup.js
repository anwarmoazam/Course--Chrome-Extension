const button = document.getElementById('spendAmount');
let total = document.getElementById('total');

chrome.storage.sync.get('total',function(budget){
    total.innerText = budget.total;
})

button.addEventListener('click',updateTotal);

function updateTotal(){
    chrome.storage.sync.get('total',function(budget){
        let newTotal = 0;
        if(budget.total){
            newTotal += parseInt(budget.total);
        }
        let amount = document.getElementById('amount').value;
        if(amount){
            newTotal += parseInt(amount);
        }
        chrome.storage.sync.set({'total':newTotal});
        total.innerText = newTotal;
        document.getElementById('amount').value = '';
    })
}
