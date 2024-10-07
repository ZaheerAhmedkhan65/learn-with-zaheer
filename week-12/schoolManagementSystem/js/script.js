let welcomeText = "Welcome to MySchool";
let welcomeMsg = document.getElementById("welcome-msg");
let writingSpeed = 100;
var i = 0;
function typeWriter() {
  if (i < welcomeText.length) {
    welcomeMsg.innerHTML += welcomeText.charAt(i);
    i++;
    setTimeout(typeWriter, writingSpeed);
  }
}
typeWriter();
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();