myLeads = []
inputEl = document.getElementById('input-el')
inputBtn = document.getElementById('input-btn')
ulEl = document.getElementById('ul-el')


leadsFromLocalStorage = JSON.parse((localStorage.getItem('myLeads')))
console.log(leadsFromLocalStorage);

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    console.log(localStorage.getItem('myLeads'));
})

renderLeads = ()=>{

    listItems = ""
    for (i=0; i<myLeads.length; i++){
        // listItems += "<li> <a href='' target='_blank'>" + myLeads[i] + " </a> </li>"
        listItems += `
            <li> 
                <a href='#' target='_blank'> ${myLeads[i]}  </a> 
            </li>
        `
    }

    ulEl.innerHTML = listItems
}




