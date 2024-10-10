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

  let munichElement = document.querySelector("#munich");
  if (munichElement) {
    let munichDateElement = munichElement.querySelector(".date");
    let munichTimeElement = munichElement.querySelector(".time");
    let munichTime = moment().tz("Europe/Munich");

    munichDateElement.innerHTML = munichTime.format("MMMM	Do YYYY");
    munichTimeElement.innerHTML = munichTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }