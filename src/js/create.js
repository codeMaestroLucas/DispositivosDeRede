document.getElementById("add-device-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
  
    const name = document.getElementById("form-name").value;
    const img = document.getElementById("form-img").value[0];
    const description = document.getElementById("form-description").value;
    const link = document.getElementById("form-link").value;
  
    const newDevice = {
      name,
      img,
      description,
      link
    };

    devicesData.push(newDevice);
  
    section.innerHTML = "";
    addData(devicesData, section); // Releoad the page with the new device
  
    document.getElementById("add-device-form").reset();
  });
  