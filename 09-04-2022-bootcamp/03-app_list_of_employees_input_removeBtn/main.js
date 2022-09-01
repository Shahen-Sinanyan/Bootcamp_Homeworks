
// Exercise 3. Let's make our table interactive!

// Apply the following functionality to our table 

// - Create a form above the table. It should contain an input, with the label  `Max Items To Show` and a submit button. The initial value of the input should be the value of Max_items_to_show  from the settings

// - It should be possible to change the Max_items_to_show value and after pressing the submit button, the table should show the submitted count of items.
// It should be possible to remove an employee from the list. There should be a button with the text `Remove`. After pressing it, the entire row should be deleted from the list 


//. Let's imagine a scenario 

// There is an application that shows a list of  employees 
// There are different settings stored at the backend, related to how to show the list 
// At first, the application should get the settings from the backend, to be able to render the list 

// Note:  Create JSON files inside the src folder and fetch all related information using fetch 

// Here are the settings available: Settings JSON

// Show_only_active - If true, only employees with status = true should be displayed 

// Max_items_to_show - how many employees should be visible (No more than the specified value)

// Show_description - If true, the description column should be visible, else
// Inside the description cell should be the following: `N/A` which means not available

// Then the application should get the list of employees and render the table on the web page. 
// It should be one employee per line considering the settings described above. 

// Here is an example of  Employees JSON.


 function settingsFetch () {
    return  fetch("settingsForData.json").then((res) => res.json()).then(settingsData => settingsData)                                                    // fetch chi linum
}

 function dataFetch () {
    return fetch('data.json').then(res => res.json()).then(data => data)
}


let table = document.getElementById('table');
let input = document.getElementById('input');
let submit = document.getElementById('submit');


let data
let settings
(async function traslateDataToVariable () {
    data = await dataFetch();
    settings = await settingsFetch();
})()

function getTableOfEmployees () {
   /////data from settings////
   let isActiv = settings[0].value;
   let maxItems = input.value;
   let description = settings[2].value;
   //////end

   //////default table head children construction/////
//    let table = document.createElement('table');
//    table.setAttribute('id', 'table');

   let trGlobal = document.createElement('tr');
   
    let thId = document.createElement('th');
    thId.innerText = 'Id';

    let thName = document.createElement('th');
    thName.innerText = 'Nmae'; 
    
    let thStatus = document.createElement('th');
    thStatus.innerText = 'Status';

    let thDescription = document.createElement('th');
    thDescription.innerText = 'Description';

    trGlobal.append(thId, thName, thStatus, thDescription);
    table.appendChild(trGlobal);
   
   ////////end


   let count = 0;
   for (let obj of data) {
        if (count >= maxItems) {
            break;
        }
        if (obj.status === isActiv) {
            let tr = document.createElement('tr');

            let tdId = document.createElement('td');
            tdId.classList.add('td');
            let tdName = document.createElement('td');
            tdName.classList.add('td');
            let tdDescription = document.createElement('td');
            tdDescription.classList.add('td');
            let status = document.createElement('td');
            status.classList.add('td');
            let removeBtn = document.createElement('button');
            removeBtn.classList.add('removeBtn');
            removeBtn.innerText = 'X';
            removeBtn.addEventListener('click', (e) => {
                e.target.parentElement.remove()
            })

            tdId.innerText = `${obj.id}`;
            tdName.innerText = `${obj.name}`;
            tdDescription.innerText = description? `${obj.description}` : 'N/A';
            status.innerText = isActiv? 'true' : 'false';

            tr.append(tdId, tdName, status, tdDescription, removeBtn);
            table.appendChild(tr);

            count++;
        }
   }

}

/////////////////jnjum e bolor row -ery///
function deleteAllTableRows () {
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }
}
/////////////////////End//////////////////
submit.addEventListener('click', (e) => {
    
        deleteAllTableRows ();
        getTableOfEmployees();
        table.style.display = 'table';
    
});




