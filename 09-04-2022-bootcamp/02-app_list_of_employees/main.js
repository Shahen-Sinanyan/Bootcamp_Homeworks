// Exercise 2. Let's imagine a scenario 

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


async function getTableOfEmployees () {
   let data = await dataFetch();
   let settings = await settingsFetch();
  
   /////from settings////
   let isActiv = settings[0].value;
   let maxItems = settings[1].value;
   let description = settings[2].value;
    
   let count = 0;
   for (let obj of data) {
        if (count === maxItems) {
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

            tdId.innerText = `${obj.id}`;
            tdName.innerText = `${obj.name}`;
            tdDescription.innerText = description? `${obj.description}` : 'N/A';
            status.innerText = isActiv? 'true' : 'false';
            tr.append(tdId, tdName, status, tdDescription);
            table.appendChild(tr);
            count++;
        }
   }
}
let button = document.getElementById('button');
button.addEventListener('click', (e) => {
    getTableOfEmployees();
    console.log(getTableOfEmployees)
    e.target.style.display = 'none';
    table.style.display = 'table';
})

