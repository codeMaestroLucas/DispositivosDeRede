// let section = document.getElementById('section');
//! Section is already in the DATA.JS

let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-button");

function searchDeviceByName(searchTerm) {
  console.log(devicesData);
  // Limpar os resultados anteriores
  section.innerHTML = "";

  let filteredDevices = devicesData.filter((device) => {
    return device.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (filteredDevices.length === 0) {
    const divNotFound = document.createElement("div");
    divNotFound.classList.add("not-found");

    const notFoundIcon = document.createElement("i");
    notFoundIcon.classList.add("fas", "fa-exclamation-circle");

    const notFoundMsg = document.createElement("p");
    notFoundMsg.classList.add("not-foundMsg", "rubik-regular", "paragraph");
    notFoundMsg.textContent = "Nenhum dispositivo encontrado.";


    divNotFound.appendChild(notFoundIcon);
    divNotFound.appendChild(notFoundMsg);
    section.appendChild(divNotFound);

    return;
  }

  const foundMsg = document.createElement("p");
  foundMsg.classList.add("found", "rubik-regular", "paragraph");
  foundMsg.textContent = "Dispositivo(s) encontrado(s):";

  section.appendChild(foundMsg);

  filteredDevices.forEach((device, index) => {
    const deviceElement = createHtmlDevices(device, index);
    console.log(deviceElement);
    section.appendChild(deviceElement);
  });
}

// Clicando no Btn
searchBtn.addEventListener("click", () => {
  let searchTerm = searchInput.value;
  searchDeviceByName(searchTerm);
});
// Pressionando `ENTER`
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let searchTerm = searchInput.value;
    searchDeviceByName(searchTerm);
  }
});
