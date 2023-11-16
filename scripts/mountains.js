"use strict";


const mountainTableBody = document.getElementById("mountainTableBody");
const mountainTable = document.getElementById("mountainTable");
const mountainList = document.getElementById("mountainList");

const articleStyle = document.getElementById("articleStyle");
const imagesDiv = document.getElementById("imageMountain");

//create functions
function loadMountainsList() {
  for (const mountainName of mountainsArray) {
    let option = document.createElement("option");
    option.innerText = mountainName.name;
    // option.value = mountainName;
    mountainList.appendChild(option);
  }
}
function loadMountainsTable() {
  mountainTableBody.innerHTML = "";
  imagesDiv.innerHTML = "";
  articleStyle.style.display = "none";
  const id = mountainList.value;

  if (id) {
    mountainTable.style.display = "block";
    imagesDiv.style.display = "block";
    articleStyle.style.display = "block";
  } else {
    mountainTable.style.display = "none";
  }
  for (const mountain of mountainsArray) {
    let coords = mountain.coords;
    if (mountain.name == id) {
      let row = mountainTableBody.insertRow(-1);
      let cell1 = row.insertCell(0);
      cell1.innerText = mountain.name;
      let cell2 = row.insertCell(1);
      cell2.innerText = mountain.elevation;
      let cell3 = row.insertCell(2);
      cell3.innerText = mountain.effort;
      let cell4 = row.insertCell(3);
      cell4.innerText = mountain.img;
      let cell5 = row.insertCell(4);
      cell5.innerText = mountain.desc;
      let cell6 = row.insertCell(5);
      cell6.innerText = coords.lat;
      let cell7 = row.insertCell(6);
      cell7.innerText = coords.lng;
      
      let image = document.createElement("img");
      
      image.src = `images/${mountain.img}`;
      
      image.alt = mountain.name;

      imagesDiv.appendChild(image);
     }
  }
}

//wire-up functions

mountainList.onchange = loadMountainsTable;
loadMountainsList();
selectMountains();