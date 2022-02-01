myLeads = []
inputEl = document.getElementById('input-el')

console.log(inputEl);

inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    console.log(myLeads);
})


