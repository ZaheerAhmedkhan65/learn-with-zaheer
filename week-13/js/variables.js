// Arrays for saving data 
const adminsDetail = [{
  dob: "12-07-2003",
  email: "zaheerahmed65@gmail.com",
  father_name: "Rana Shabeer Khan",
  gender: "Male", name: "Zaheer Ahmed Khan",
  password: "786Pak",
  profile: "./zaheer.png"
}];
const studentsDetail = [];
const teachersDetail = [];
const employeesDetail = [];
const coursesDetail = [
  { course_name: "web development", course_fee: 12000, course_duration: "3 months" },
  { course_name: "ux/ui", course_fee: 10000, course_duration: "3 months" },
  { course_name: "graphic designer", course_fee: 8000, course_duration: "3 months" },
];
const attendencesDetail = [];
let is_attendeceMarked = false;

// logout 
let adminProfile = document.getElementById("adminProfile");
document.addEventListener("DOMContentLoaded", () => {
  adminProfile.innerHTML = `
  <img class="border-1 br-50-per bg-primary" src="../week-12/schoolManagementSystem/zaheer.png" alt="admin profile" width="60px" height="50px">`
});
let logOut = document.getElementById("logOut");
logOut.addEventListener("click", () => {
  window.location.replace("./login.html");
});
// welcome message and tab controller
let welcomeText = "Welcome To MySchool";
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

// document variables
let totalFee = 0;

let notification = document.querySelector(".notification"); //display notification at

let adminsCount = document.getElementById("adminCount");    //display number of admins at
let teacherCount = document.getElementById("teacherCount"); //display number of teachers at
let studentCount = document.getElementById("studentCount"); //display number of students at
let coursesCount = document.getElementById("courseCount");  //display number of courses at
let feeCount = document.getElementById("feeCount");         //display total fee of students at

// check if input fields are empty
function checkEmptyFields(fields) {
  return fields.some(field => field.trim() === '');
}

// Event listener for adding a new admin
let addNewAdmin = document.getElementById("addAdmin");



// Event listener for adding a new student
let addNewStudent = document.getElementById("addStudent");


// Event listener for adding a new teacher
let addNewTeacher = document.getElementById("addTeacher");


// Event listener for adding a new course
let addNewCourse = document.getElementById("addCourse");


// toggle pop-up visibility
function togglePopUp(popUpContainer, popUpElement) {
  if (popUpElement.style.visibility === "visible") {
    popUpContainer.style.display = "none";
    popUpElement.style.visibility = "hidden";
  } else {
    popUpContainer.style.display = "block";
    popUpElement.style.visibility = "visible";
  }
}

// Admin pop-up
let adminPopUpContainer = document.querySelector(".adminPopUpContainer");
let addAdminPopUp = document.querySelector(".addAdminPopUp");
let addNewAdminBtn = document.getElementById("addNewAdmin");

// Teacher pop-up
let teacherPopUpContainer = document.querySelector(".teacherPopUpContainer");
let addTeacherPopUp = document.querySelector(".addTeacherPopUp");
let addNewTeacherBtn = document.getElementById("addNewTeachers");

// Student pop-up
let studentPopUpContainer = document.querySelector(".studentPopUpContainer");
let addStudentPopUp = document.querySelector(".addStudentPopUp");
let addNewStudentBtn = document.getElementById("addNewStudent");

// Course pop-up
let coursePopUpContainer = document.querySelector(".coursePopUpContainer");
let addCoursePopUp = document.querySelector(".addCoursePopUp");
let addNewCoursesBtn = document.getElementById("addNewCourse");

// Reusable function to cancel pop-up visibility
function cancelPopUp(popUpContainer, popUpElement) {
  if (popUpElement.style.visibility === "visible") {
    popUpContainer.style.display = "none";
    popUpElement.style.visibility = "hidden";
  }
}

// Admin cancel button
let cancelAddNewAdminBtn = document.querySelector(".cancelAddNewAdminBtn");

// Teacher cancel button
let cancelAddNewTeacherBtn = document.querySelector(".cancelAddNewTeacherBtn");

// Student cancel button
let cancelAddNewStudentBtn = document.querySelector(".cancelAddNewStudentBtn");

// Course cancel button
let cancelAddNewCourseBtn = document.querySelector(".cancelAddNewCourseBtn");

let adminList = document.querySelector(".adminList");

let studentsList = document.querySelector(".studentsList");

let teachersList = document.querySelector(".teachersList");

let coursesList = document.querySelector(".coursesList");

// variables for new Entity
let newAdmin;
let newStudent;
let newTeacher;
let newEmployee;
let newCourse;
let newExam;
let newAttendence;
let markAttendence;

//date will be the current date
function getCurrentDate(){
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  return mm + '/' + dd + '/' + yyyy;
 }


// for the style and text of  notification
function notify(color, text) {
  notification.style.display = "block";
  notification.classList.add(color);
  notification.textContent = text;
  setTimeout(() => {
    notification.style.display = "none";
    notification.classList.remove(color);
    notification.textContent = '';
  }, 2000);
}
// for Capitalizing first char of name
function capitalizeName(name) {
  return name.split(" ").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

// for new Entity 
function addNewEntity(entityList, newEntity, compareFunc, entityName) {
  const duplicateEntity = entityList.find(compareFunc);
  if (duplicateEntity) {
    notify("color-danger", newEntity[entityName] + " already exists.");
    return;
  }
  entityList.push(newEntity);
  notify("color-success", newEntity[entityName] + " is added.");
}

// for showing data in tables
function createTable(container, data, headers, rowData) {
  let table = document.createElement("table");
  container.innerHTML = '';
  container.appendChild(table);

  table.innerHTML = `
      <tr class="bg-primary">
        ${headers.map(header => `<th>${header}</th>`).join('')}
      </tr>
      ${data.map(rowData).join('')}`;
}

// for deleting enteties 
function renderEntities(container, data, headers, rowDataFunc, name, ele, entList) {
  let table = document.createElement("table");
  container.innerHTML = '';
  container.appendChild(table);

  table.innerHTML = `
      <tr class="bg-primary">
        ${headers.map(header => `<th>${header}</th>`).join('')}
        <th>Delete</th>
      </tr>
      ${data.map(rowDataFunc).join('')}`;
  document.querySelectorAll(".delete-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      notify("color-danger", data[index].name + " is deleted.");
      if (data == studentsDetail) {
        updateStudentFee(generateCourseFee(data[index].grade),"sub");
        updateFeeCount(feeCount, totalFee);
      };
      data.splice(index, 1);
      updateTotalCount(ele, entList);
      renderEntities(container, data, headers, rowDataFunc, name, ele, entList);
      if (data == adminsDetail) {
        showAdminPass();
      };
      hideEmptyTable(data,container);
    });
  });
}

// for showing admin password in table
function showAdminPass() {
  let eyeIcon = document.querySelectorAll(".eyeIcon");
  let adminPassword = document.querySelectorAll(".adminPass");
  eyeIcon.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (adminPassword[index].type == "text") {
        adminPassword[index].type = "password"
        btn.innerHTML = '<i class="ri-eye-line"></i>'
      }
      else {
        adminPassword[index].type = "text"
        btn.innerHTML = '<i class="ri-eye-off-line"></i>'
      }
    });
  });
}

// for  total person count
function updateTotalCount(element, entityList) {
  element.textContent = entityList.length;
}

// For total fee count
function updateFeeCount(element, totalFee) {
  element.textContent = totalFee;
}
// generate course fee
function generateCourseFee(courseName) {
  for (var i = 0; i < coursesDetail.length; i++) {
    if (coursesDetail[i].course_name == courseName) {
      return coursesDetail[i].course_fee;
    }
  }
}
// for updating student fee
function updateStudentFee(courseFee, type) {
  if (type == "add") {
    return totalFee += courseFee;
  }
  else if(type == "sub") {
    return totalFee -= courseFee;
  }
}
// for hiding empty tables
function hideEmptyTable(data,table) {
  if (data.length == 0) {
    table.innerHTML = '';
  }
}

// attendece table created
function createAttendeceTable (container, data, headers, rowData){ 
  let table = document.createElement("table");
  let submitBtnContainer = document.createElement("div");
  container.innerHTML = ''; 
  container.appendChild(table);
  container.appendChild(submitBtnContainer);
  table.innerHTML = `
      <tr class="bg-primary">
        ${headers.map(header => `<th>${header}</th>`).join('')}
      </tr>
      ${data.map(rowData).join('')}
      `;
      submitBtnContainer.classList.add("d-flex","align-center","justify-content-end");
  submitBtnContainer.innerHTML = `<button id="submitAttendence" class="pointer bg-success color-white border-none br-5 fs-20 p-10 mt-10 fw-800">Submit</button>`;
// variables for attendence
let presentBtn = document.querySelectorAll(".present");
let absentBtn = document.querySelectorAll(".absent");

    presentBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        markAttendence("Present");
        data[index].attendences.push(data[index].status = "Present");
        btn.classList.remove("color-success");
        btn.classList.add("bg-success", "color-white", "border-none");
        btn.disabled = true;
        absentBtn[index].disabled = true;
      });
    });
  
      absentBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          markAttendence("Absent");
          data[index].attendences.push(data[index].status = "Absent");
          btn.classList.remove("color-danger");
          btn.classList.add("bg-danger", "color-white", "border-none");
          btn.disabled = true;
          presentBtn[index].disabled = true;
        });
      });
  let submitBtn = document.getElementById("submitAttendence");
  submitBtn.addEventListener("click", () => {
    container.innerHTML = '';
    createTable(container, data, headers, rowData);
    presentBtn.disabled = true;
    absentBtn.disabled = true;
    is_attendeceMarked = true;
    notify("color-success", "Attendence is submitted.");
  });
}

