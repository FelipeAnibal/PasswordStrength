//on change of password
function change() {
  //update the password variable
  let password = document.getElementById("passwordInput").value;
  //update the time it would take for the password to be cracked
  document.getElementById('time').innerHTML = timeToCrack(password);
}

//determine how big is the variety of characters
function numOfChoices(password) {
  $(".btn").toggleClass("active", false);
  let num = 0;
  //determine if the password include numbers
  if (/[0-9]/.test(password)) {
    $("#numberIndicator").toggleClass("active", true);
    num += 10;
  }
  //determine if the password includes lowercase letters
  if (/[a-z]/.test(password)) {
    $("#lowerIndicator").toggleClass("active", true);
    num += 26;
  }
  //determine if the password includes uppercase letters
  if (/[A-Z]/.test(password)) {
    $("#upperIndicator").toggleClass("active", true);
    num += 26;
  }
  //determine if the password includes others characters (!@#$%&*()+-=;:.,{}[]?)
  if (/\W/.test(password)) {
    $("#otherIndicator").toggleClass("active", true);
    num += 22;
  }
  return num;
}

//calculate the number of possible combinations given a certain password
function possibilities(password) {
  p = Math.pow(numOfChoices(password), password.length);
  document.getElementById("combinations").innerHTML = p;
  return p;
}

//calculate the time it would take for a password to be cracked
function timeToCrack(password) {

  let speed = document.getElementById("speedOfTest").value;
  t = Math.round(possibilities(password) / speed * 100) / 100;

  //convert the time in seconds to the most suitable measure
  if (t > 3600 * 24 * 365) {
    return Math.round((t * 100) / (3600 * 24 * 365)) / 100 + " anos";
  } else if (t > 3600 * 24) {
    return Math.round((t * 100) / (3600 * 24)) / 100 + " dias";
  } else if (t > 3600) {
    return Math.round((t * 100) / (3600)) / 100 + " horas";
  } else if (t > 60) {
    return Math.round((t * 100) / (60)) / 100 + " minutos";
  }
  return t + " segundos";
}
