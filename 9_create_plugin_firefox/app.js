myLeads = []
inputEl = document.getElementById('input-el')
inputBtn = document.getElementById('input-btn')

ulEl = document.getElementById('ul-el')


inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    console.log(myLeads);
    for (i=0; i<myLeads.length; i++){
        
        ulEl.innerHTML +=  "<li>" + myLeads[i];  + "</li>"
    }
})


