let section = document.getElementById('section');
let devicesData = [];
async function loadDevicesData() {
  try {
    const response = await fetch('src/data/devices.json');
    
    devicesData = await response.json();
    
    addData(devicesData, section);
    return devicesData;

  } catch (error) {
    console.error("Erro ao carregar o arquivo JSON:", error);
  }
}

function createHtmlImgNameDiv(device) {
  const imgNameDiv = document.createElement("div");
  imgNameDiv.classList.add("img-name-div");

  const name = document.createElement("h3");
  name.textContent = device.name;
  name.classList.add("device-name", "questrial-regular");

  const img = document.createElement("img");
  img.setAttribute("src", device.imgPath);
  img.setAttribute("alt", `${device.name} imagem`);
  img.classList.add("device-img");

  imgNameDiv.appendChild(name);
  imgNameDiv.appendChild(img);

  return imgNameDiv;
}

function createHtmlContentDiv(device) {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  const description = document.createElement("p");
  description.textContent = device.description;
  description.classList.add("rubik-regular", "paragraph", "device-description");

  const link = document.createElement("p");
  const ancor = document.createElement("a");
  ancor.setAttribute("href", device.link);
  ancor.textContent = "Saiba mais";
  ancor.classList.add("moreinfo");
  ancor.setAttribute("target", "_blank");
  link.appendChild(ancor);
  link.classList.add("rubik-regular", "paragraph", "link-to-more-info");

  contentDiv.appendChild(description);
  contentDiv.appendChild(link);

  return contentDiv;
}

function createHtmlDevices(device, index) {
  const container = document.createElement("div");
  container.classList.add("container", "short");

  if (index % 2 !== 0) {
    container.classList.add("even");
  }

  const imgNameDiv = createHtmlImgNameDiv(device);
  const contentDiv = createHtmlContentDiv(device);

  container.appendChild(imgNameDiv);
  container.appendChild(contentDiv);

  return container;
}

function addData(devicesData, targetElement) {
  devicesData.forEach((device, index) => {
    const deviceElement = createHtmlDevices(device, index);
    targetElement.appendChild(deviceElement);
  });
}

loadDevicesData();
