myLeads = []
oldLeads = []
inputEl = document.getElementById('input-el')
inputBtn = document.getElementById('input-btn')
ulEl = document.getElementById('ul-el')
deleteBtn = document.getElementById('delete-btn')


leadsFromLocalStorage = JSON.parse((localStorage.getItem('myLeads')))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
} 

/* 
    - rendre la foncttion renderLeads() plus dynamique
    - donner une parametre a la fonction renderLeads()  comme ca, renderLeads(myLeads)
    - changer la fonction renderLeads() en render()

*/
// function renderLeads(){

//     listItems = ""
//     for (i=0; i<myLeads.length; i++){
//         // listItems += "<li> <a href='' target='_blank'>" + myLeads[i] + " </a> </li>"
//         listItems += `
//             <li> 
//                 <a href='#' target='_blank'> ${myLeads[i]}  </a> 
//             </li>
//         `
//     }

//     ulEl.innerHTML = listItems
// }

function render(leads){

    listItems = ""
    for (i=0; i<leads.length; i++){
        // listItems += "<li> <a href='' target='_blank'>" + myLeads[i] + " </a> </li>"
        listItems += `
            <li> 
                <a href='#' target='_blank'> ${leads[i]}  </a> 
            </li>
        `
    }

    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener('dblclick', ()=>{
    console.log('marche');
    localStorage.clear()
    myLeads = []
    render(myLeads)
    location.reload()
})

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    render(myLeads)
    inputEl.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    console.log(localStorage.getItem('myLeads'));
})






