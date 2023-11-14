"use strict";

const nationalParkTableBody = document.getElementById("nationalParkTableBody");
const locationSelect = document.getElementById("locationSelect");

function loadStatesList() {
  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.value = location;
    option.innerText = location;
    locationSelect.appendChild(option);
  }
}

loadStatesList();

function loadNationalParkTable() {
  for (const parks of nationalParksArray) {
    let row = nationalParkTableBody.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerText = parks.LocationID;

    let cell2 = row.insertCell(1);
    cell2.innerText = parks.LocationName;

    let cell3 = row.insertCell(2);
    cell3.innerText = parks.Address;

    let cell4 = row.insertCell(3);
    cell4.innerText = parks.City;

    let cell5 = row.insertCell(4);
    cell5.innerText = parks.State;

    let cell6 = row.insertCell(5);
    cell6.innerText = parks.ZipCode;

    let cell7 = row.insertCell(6);
    cell7.innerText = parks.Phone;

    let cell9 = row.insertCell(7);
    if (parks.Visit) {
      var link = document.createElement("a");
     
      link.href = parks.Visit;
      link.innerText = parks.LocationName;
      cell9.appendChild(link);
    }
   
   
   
    // let cell8 = row.insertCell(7);
   // cell8.innerText = parks.Visit;
  }

}
loadNationalParkTable();
