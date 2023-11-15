"use strict";

const nationalParkTableBody = document.getElementById("nationalParkTableBody");
const locationSelect = document.getElementById("locationSelect");
const parkTypeSelect = document.getElementById("parkTypeSelect");

const locationRadioBtn = document.getElementById("locationRadioBtn");
const typeRadioBtn = document.getElementById("typeRadioBtn");
const allRadioBtn = document.getElementById("allRadioBtn"); //radio btn variables

function loadStatesList() {
  locationSelect.style.display = "block";
  locationSelect.innerHTML = "";
  nationalParkTableBody.innerHTML = "";
  parkTypeSelect.style.display = "none";
  locationRadioBtn.checked = "true";

  let option = document.createElement("option");
  option.innerText = "Select By State...";
  locationSelect.appendChild(option);

  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.value = location;
    option.innerText = location;
    locationSelect.appendChild(option);
  }
}

loadStatesList();

function loadNationalParkTable(park) {
  for (const park of nationalParksArray) {
    let row = nationalParkTableBody.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerText = park.LocationID;

    let cell2 = row.insertCell(1);
    cell2.innerText = park.LocationName;

    let cell3 = row.insertCell(2);
    cell3.innerText = park.Address;

    let cell4 = row.insertCell(3);
    cell4.innerText = park.City;

    let cell5 = row.insertCell(4);
    cell5.innerText = park.State;

    let cell6 = row.insertCell(5);
    cell6.innerText = park.ZipCode;

    let cell7 = row.insertCell(6);
    cell7.innerText = park.Phone;

    let cell8 = row.insertCell(7);
    if (park.Visit) {
      var link = document.createElement("a");

      link.href = park.Visit;
      link.innerText = park.LocationName;
      cell8.appendChild(link);
    }

    // let cell8 = row.insertCell(7);
    // cell8.innerText = parks.Visit;
  }
}

function loadParkTypeList() {
  locationSelect.style.display = "none";
  parkTypeSelect.innerHTML = "";
  nationalParkTableBody.innerHTML = "";
  parkTypeSelect.style.display = "block";

  let option = document.createElement("option");
  option.innerText = "Select By Type...";
  parkTypeSelect.appendChild(option);

  for (const types of parkTypesArray) {
    let option = document.createElement("option");
    option.value = types;
    option.innerText = types;
    parkTypeSelect.appendChild(option);
  }
}

function sortTableContent() {
  const selectedState = locationSelect.value;
  const selectedType = parkTypesArray.find((type) => selectedState.includes(type));
  for (const park of nationalParksArray) {
    const islandState = selectedState == "Rhode Island" || selectedState == "Virgin Islands";

    if (park.State == selectedState || (park.LocationName.includes(selectedType) && !islandState)) {
      loadNationalParkTable(park)
    }
  }
}

locationRadioBtn.onclick = loadStatesList;
typeRadioBtn.onclick = loadParkTypeList;
allRadioBtn.onclick = function () {
  parkTypeSelect.style.display = "none";
  locationSelect.style.display = "none";
  loadNationalParkTable();
};


locationSelect.onchange = sortTableContent;
parkTypeSelect.onchange = sortTableContent;