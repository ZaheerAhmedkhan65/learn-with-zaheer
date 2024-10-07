//log in page variables
let eyeIcon = document.querySelector(".eyeIcon");
let loginInstruction = document.querySelector(".loginInstruction");
let closeBtn = document.getElementById("closeBtn");
let loginForm = document.querySelector(".login-form");
let openFormWrapper = document.getElementById("openFormWrapper");
let openForm = document.getElementById("openForm");
let errorContainer = document.querySelector(".errorContainer");
let instructionText = "Welcome to admin page.Sign in to open admin panel."
let writingSpeed = 100;
var i = 0;
let adminProfileLink;
    function typeWriter() {
      if (i < instructionText.length) {
        loginInstruction.innerHTML += instructionText.charAt(i);
        i++;
        setTimeout(typeWriter, writingSpeed);
      }
    }
    typeWriter();
       
    closeBtn.addEventListener("click",()=>{
      loginForm.style.display = "none";
      openFormWrapper.style.display = "block";
    });
    openForm.addEventListener("click",()=>{
      loginForm.style.display = "block";
      openFormWrapper.style.display = "none";
    });

    function login(email, password) {
      for(var i = 0; i < adminsDetail.length ; i++){
      if (adminsDetail[i].email === email && adminsDetail[i].password === password) {
       adminProfileLink = adminsDetail[i].profile;
        window.location.href = "./index.html";
        return;
      }
      else {
        errorContainer.innerHTML = `
        <p class = "color-danger">Invalid Email Or Password.Please Try Again !</p>
        `;
        setTimeout(()=>{
          errorContainer.innerHTML = ``;
        },5000);
        return;
      }
    }
    }

    let loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", () => {
      let passwordInput = document.getElementById("password").value;
      let emailInput = document.getElementById("email").value;
      if(document.getElementById("email").value === ''||document.getElementById("password").value === ''){
        notify("color-danger","Please fill all input fields!")
        return;
      } 
      login(emailInput, passwordInput);
      document.getElementById("email").value = '';
      document.getElementById("password").value = '';
    })

    eyeIcon.addEventListener("click", () => {
      if (password.type == "password") {
        eyeIcon.innerHTML = `<i class="ri-eye-off-line"></i>`;
        password.type = "text";
      }
      else {
        eyeIcon.innerHTML = `<i class="ri-eye-line"></i>`;
        password.type = "password"
      }
    });