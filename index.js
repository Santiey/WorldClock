function updateTime() {
let mutareElement = document.querySelector("#mutare");
  if (mutareElement) {
    let mutareDateElement = mutareElement.querySelector(".date");
    let mutareTimeElement = mutareElement.querySelector(".time");
    let mutareTime = moment().tz("Africa/Mutare");

    mutareDateElement.innerHTML = mutareTime.format("MMMM	Do YYYY");
    mutareTimeElement.innerHTML = mutareTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let santiagoElement = document.querySelector("#santiago");
  if (santiagoElement) {
    let santiagoDateElement = santiagoElement.querySelector(".date");
    let santiagoTimeElement = santiagoElement.querySelector(".time");
    let santiagoTime = moment().tz("America/Santiago");

    santiagoDateElement.innerHTML = santiagoTime.format("MMMM	Do YYYY");
    santiagoTimeElement.innerHTML = santiagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz("#cities");
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

    updateTime();
    setInterval(updateTime, 1000);

    let citiesSelectElement = document.querySelector("#city");
    citiesSelectElement.addEventListener("change", updateCity);