myLeads = []
inputEl = document.getElementById('input-el')
inputBtn = document.getElementById('input-btn')

ulEl = document.getElementById('ul-el')

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

renderLeads = ()=>{

    listItems = ""
    for (i=0; i<myLeads.length; i++){
        listItems += "<li>" + myLeads[i] + "</li>"
        console.log(listItems);
    }

    ulEl.innerHTML = listItems
}




