"use strict"

function loadParkList() {
    for (const Park of nationalParksArray) {
        let option = document.createElement("option");
        option.textContent = Park.State;
        parksDrop.appendChild(option);
    }
}
loadParkList();