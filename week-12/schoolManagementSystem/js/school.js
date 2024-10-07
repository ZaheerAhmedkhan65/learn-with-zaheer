let students = [];
let admins = [{dob:"12-07-2003",email:"zaheerahmed65@gmail.com",father_name:"Rana Shabeer Khan",gender:"Male",name:"Zaheer Ahmed Khan",password:"786Pak",profile:"./zaheer.png"}];
let teachers = [];
let courses = [
  {course_name:"web development",course_duration : "6 Months",course_fee : 12000},
  {course_name:"ux/ui",course_duration : "4 Months",course_fee : 8000},
  {course_name:"graphic designer",course_duration : "3 Months",course_fee : 6000},
];
let totalFee = 0;

let notification = document.querySelector(".notification");
class Course{
  constructor(course_name,course_duration,course_fee){
    this.course_name = course_name;
    this.course_duration = course_duration;
    this.course_fee = course_fee;
  }
  course_details(){
    console.log("course name : " + this.course_name);
    console.log("course duration : " + this.course_duration);
    console.log("course fee : " + this.course_fee);
  }

}

class Person extends Course{
  constructor(name,father_name,gender,dob,course_name,course_duration,course_fee){
       super(course_name,course_duration,course_fee);
       this.name = name;
       this.father_name = father_name;
       this.gender = gender;
       this.dob = dob;
  }
  age(){
      const today = new Date();
      const dateOfBirth = new Date(this.dob);
      let age = today.getFullYear() - dateOfBirth.getFullYear();
      return age;
  }  
}

class Admin extends Person{
  constructor(name,father_name,gender,dob,email,password,profile){
    super(name,father_name,gender,dob);
    this.email = email;
    this.password = password;
    this.profile = profile;
  }
}

class Teacher extends Person{
  constructor(name,father_name,gender,dob,teacher_id,qualification,salary,salary_status){
    super(name,father_name,gender,dob);
    this.teacher_id = teacher_id;
    this.qualification = qualification;
    this.salary = salary;
    this.salary_status = salary_status;
  }
  info(){
    console.log("name : " + this.name);
    console.log("father name : " + this.father_name);
    console.log("gender : " + this.gender);
    console.log("age : " + this.age());
    console.log("date of birth : " + this.dob);
  }
  getDetails(){
    console.log("teacher id : " + this.teacher_id);
    console.log("subject : " + this.course_name);
    console.log("qualification : " + this.qualification);
    console.log("salary : " + this.salary);
    console.log("salary status : " + this.salary_status);
   }
}

class Student extends Person{
  static roll_no_count = 1000; 
  constructor(name,father_name,gender,dob,course_name,grade,fee,fee_status){
    super(name,father_name,gender,dob,course_name);
    this.roll_no = Student.roll_no_count++;
    this.grade = grade;
    this.fee = fee;
    this.fee_status = fee_status;
  }
  
  info(){ 
    console.log("name : " + this.name);
    console.log("father name : " + this.father_name);
    console.log("gender : " + this.gender);
    console.log("age : " + this.age());
    console.log("date of birth : " + this.dob);
  }
   getDetails(){
    console.log("roll no : " + this.roll_no);
    console.log("grade : " + this.grade);
    console.log("fee : " + this.fee);
    console.log("fee status : " + this.fee_status);
   }
}

class Exam{

}

class Result{

}

let teacherCount = document.getElementById("teacherCount");
let studentCount = document.getElementById("studentCount");
let coursesCount = document.getElementById("courseCount");
let feeCount = document.getElementById("feeCount");


function totalStudents(){
return studentCount.textContent = students.length;
}
function totalTeachers(){
  return teacherCount.textContent = teachers.length;;
}
function totalCourses(){
  return coursesCount.textContent = courses.length;;
}
function totalFeeCount(){
  return feeCount.textContent = totalFee;
  }
function notify(color,text){
  notification.style.display = "block";
  notification.classList.add(color);
  notification.textContent = text;
  setTimeout(()=>{
    notification.style.display = "none";
    notification.classList.remove(color);
    notification.textContent = '';
  },2000);
  }
function capitalizeName(name) {
  return name.split(" ").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function addStudent(students,newStudent){
  const duplicateStudent = students.find(dupStudent => dupStudent.name === newStudent.name && dupStudent.father_name === newStudent.father_name && dupStudent.dob === newStudent.dob && dupStudent.gender === newStudent.gender);
  if(duplicateStudent){
    notify("color-danger",newStudent.name + " is already exist.")
    return;
  }

  students.push(newStudent);
  totalStudents();
  notify("color-success",newStudent.name + " is added.")
}
function addAdmin(admins,newAdmin){
  const duplicateAdmin = admins.find(dupAdmins => dupAdmins.name === newAdmin.name && dupAdmins.father_name === newAdmin.father_name && dupAdmins.dob === newAdmin.dob && dupAdmins.gender === newAdmin.gender);
  if(duplicateAdmin){
    notify("color-danger",newAdmin.name + " is already exist.")
    return;
  }
  admins.push(newAdmin);
  notify("color-success",newAdmin.name + " is added.")
}
function addTeacher(teachers,newTeacher){
  const duplicateTeacher = teachers.find(dupTeacher => dupTeacher.name === newTeacher.name && dupTeacher.father_name === newTeacher.father_name && dupTeacher.dob === newTeacher.dob && dupTeacher.gender === newTeacher.gender);
  if(duplicateTeacher){
    notify("color-danger",newTeacher.name + " is already exist.")
    return;
  }
  teachers.push(newTeacher);
  totalTeachers();
  notify("color-success",newTeacher.name + " is added.")
}

function addCourse(courses,newCourse){
  const duplicateCourses = courses.find(dupCourse => dupCourse.course_name === newCourse.course_name && dupCourse.course_duration === newCourse.course_duration && dupCourse.course_fee === newCourse.course_fee);
  if(duplicateCourses){
    notify("color-danger",newCourse.course_name + " is already exist.")
    return;
  }

  courses.push(newCourse);
  totalCourses();

  notify("color-success",newCourse.course_name + " is added.")
}

// creates new admins
let addNewAdmin = document.getElementById("addAdmin");
addNewAdmin.addEventListener("click",()=>{
  let adminName = document.getElementById("adminName").value;
  let adminFatherName = document.getElementById("adminFatherName").value;
  let adminGender = document.getElementById("adminGender").value;
  let adminDob = document.getElementById("adminDob").value;
  let adminEmail = document.getElementById("adminEmail").value;
  let adminPass = document.getElementById("adminPassword").value;
  if(adminName == '' || adminFatherName == '' || adminGender == ''||adminDob == ''||adminEmail == ''||adminPass == ''){
    notify("color-danger","Please fill all the input fields!");
    return ;
  }
  let newAdmin = new Admin (capitalizeName(adminName),capitalizeName(adminFatherName),adminGender,adminDob,adminEmail,adminPass);
  addAdmin(admins,newAdmin);
});
// creates new students
let addNewStudent = document.getElementById("addStudent");
addNewStudent.addEventListener("click",()=>{
  let studentName = document.getElementById("studentName").value;
  let studentFatherName = document.getElementById("studentFatherName").value;
  let studentGender = document.getElementById("studentGender").value;
  let studentDob = document.getElementById("studentDob").value;
  let studentGrade = document.getElementById("studentGrade").value;
  // let studentFee = document.getElementById("studentFee").value;
  if(studentName == '' || studentFatherName == '' ||studentGender == ''||studentDob == ''||studentGrade ==''){
    notify("color-danger","Please fill all the input fields!")
      return ;
  }
  let studentFee ;
let studentCourse;
  for(var i = 0; i < courses.length ; i++){
    if(studentGrade == courses[i].course_name){
      studentCourse = courses[i].course_name;
      studentFee = courses[i].course_fee; 
      totalFee += studentFee ;
      totalFeeCount();
    }
  }
  
  let newStudent = new Student (capitalizeName(studentName),
  capitalizeName(studentFatherName),studentGender,studentDob,
  studentCourse,studentGrade,studentFee,"panding");
  addStudent(students,newStudent);
}) ;

let addNewTeacher = document.getElementById("addTeacher");
addNewTeacher.addEventListener("click",()=>{
  let teacherName = document.getElementById("teacherName").value;
  let teacherFatherName = document.getElementById("teacherFatherName").value;
  let teacherGender = document.getElementById("teacherGender").value;
  let teacherDob = document.getElementById("teacherDob").value;
  let teacherQualification = document.getElementById("teacherQualification").value;
  let teacherSalary = document.getElementById("teacherSalary").value;
  if(teacherName == '' || teacherFatherName == '' || teacherGender == ''||teacherDob == '' || teacherQualification == '' ||teacherSalary == ''){
    notify("color-danger","Please fill all the input fields!");
    return ;
  }
  let newTeacher = new Teacher (capitalizeName(teacherName),capitalizeName(teacherFatherName),teacherGender,teacherDob,1,teacherQualification,teacherSalary,"pending");
  addTeacher(teachers,newTeacher);
  document.getElementById("teacherName").value = '';
  document.getElementById("teacherFatherName").value = '';
  document.getElementById("teacherGender").value = '';
  document.getElementById("teacherDob").value = '';
  document.getElementById("teacherQualification").value = '';
  document.getElementById("teacherSalary").value = '';
});

let addNewCourse = document.getElementById("addCourse");
addNewCourse.addEventListener("click",()=>{
  let courseName = document.getElementById("courseName").value;
  let courseDuration = document.getElementById("courseDuration").value;
  let courseFee = document.getElementById("courseFee").value;

  if(courseName == '' || courseDuration == '' || courseFee == ''){
    notify("color-danger","Please fill all the input fields!");
    return ;
  }
  let newCourse = new Course (capitalizeName(courseName),capitalizeName(courseDuration),courseFee);
  addCourse(courses,newCourse);
});

let adminList = document.querySelector(".adminList");
let showAdmin = document.getElementById("showAdmin");
showAdmin.addEventListener("click",()=>{
  let table = document.createElement("table");
  adminList.innerHTML = '';
  adminList.appendChild(table);
  table.innerHTML = `
  <tr class="bg-primary">
    <th>Name</th>
    <th>Father Name</th>
    <th>Gender</th>
    <th>Date Of Birth</th>
    <th>Email</th>
    <th>Password</th>
  </tr>
  ${admins.map((admin=>`
      <tr>
        <td> ${admin.name}</td>
        <td> ${admin.father_name}</td>
        <td>${admin.gender}</td>
        <td>${admin.dob}</td>
        <td>${admin.email}</td>
        <td>${admin.password}</td>
      </tr>
    `)).join('')}`;
});
let studentsList = document.querySelector(".studentsList");
let showStudents = document.getElementById("showStudents");
showStudents.addEventListener("click",()=>{
  let table = document.createElement("table");
  studentsList.innerHTML = '';
  studentsList.appendChild(table);
  table.innerHTML = `
  <tr class = "bg-primary">
    <th>Roll No</th>
    <th>Name</th>
    <th>Father Name</th>
    <th>Gender</th>
    <th>Age</th>
    <th>Grade</th>
    <th>Fee</th>
    <th>Fee Status</th>
  </tr>
  ${students.map((student)=>`
    <tr>
      <td> ${student.roll_no}</td>
      <td> ${student.name}</td>
      <td> ${student.father_name}</td>
      <td>${student.gender}</td>
      <td>${student.age()}</td>
      <td>${student.grade}</td>
      <td>${student.fee}</td>
      <td>${student.fee_status}</td>
    </tr>
`).join('')}`;
});

let teachersList = document.querySelector(".teachersList");
let showTeachers = document.getElementById("showTeachers");
showTeachers.addEventListener("click",()=>{
  let table = document.createElement("table");
  teachersList.innerHTML = '';
  teachersList.appendChild(table);
  table.innerHTML = `
  <tr class="bg-primary">
    <th>ID</th>
    <th>Name</th>
    <th>Father Name</th>
    <th>Gender</th>
    <th>Date Of Birth</th>
    <th>Age</th>
    <th>Qualification</th>
    <th>Salary</th>
  </tr>
  ${teachers.map((teacher)=>`
    <tr>
    <td>${teacher.teacher_id}</td>
    <td>${teacher.name}</td>
    <td>${teacher.father_name}</td>
    <td>${teacher.gender}</td>
    <td>${teacher.dob}</td>
    <td>${teacher.age()}</td>
    <td>${teacher.qualification}</td>
    <td>${teacher.salary}</td>
    </tr>
    `).join('')
  }`;
})


let coursesList = document.querySelector(".coursesList");
let showCourses = document.getElementById("showCourses");
showCourses.addEventListener("click",()=>{
  let table = document.createElement("table");
  coursesList.innerHTML = '';
  coursesList.appendChild(table);
  table.innerHTML = `
  <tr class="bg-primary">
    <th>Course</th>
    <th>Duration</th>
    <th>Fee</th>
  </tr>
  ${courses.map((course)=>`
    <tr>
    <td>${course.course_name}</td>
    <td>${course.course_duration}</td>
    <td>${course.course_fee}</td>
    </tr>
    `).join('')
  }`;
});

let adminPopUpContainer = document.querySelector(".adminPopUpContainer");
let addAdminPopUp = document.querySelector(".addAdminPopUp");
let addNewAdminBtn = document.getElementById("addNewAdmin");
addNewAdminBtn.addEventListener("click",()=>{
  if(addAdminPopUp.style.visibility == "visible"){
    adminPopUpContainer.style.display = "none";
    addAdminPopUp.style.visibility = "hidden";

    }
    else{
      adminPopUpContainer.style.display = "block";
      addAdminPopUp.style.visibility = "visible";
    }
});

let teacherPopUpContainer = document.querySelector(".teacherPopUpContainer");
let addTeacherPopUp = document.querySelector(".addTeacherPopUp");
let addNewTeacherBtn = document.getElementById("addNewTeachers");
addNewTeacherBtn.addEventListener("click",()=>{
  if(addTeacherPopUp.style.visibility == "visible"){
    teacherPopUpContainer.style.display = "none";
  addTeacherPopUp.style.visibility = "hidden";
  }
  else{ 
    teacherPopUpContainer.style.display = "block";
    addTeacherPopUp.style.visibility = "visible";
  }
});

let studentPopUpContainer = document.querySelector(".studentPopUpContainer");
let addStudentPopUp = document.querySelector(".addStudentPopUp");
let addNewStudentBtn = document.getElementById("addNewStudent");
addNewStudentBtn.addEventListener("click",()=>{
  if(addStudentPopUp.style.visibility == "visible"){
    studentPopUpContainer.style.display = "none";
    addStudentPopUp.style.visibility = "hidden";
  }
  else{
    studentPopUpContainer.style.display = "block";
    addStudentPopUp.style.visibility = "visible";
  }
});
let coursePopUpContainer = document.querySelector(".coursePopUpContainer");
let addCoursePopUp = document.querySelector(".addCoursePopUp");
let addNewCoursesBtn = document.getElementById("addNewCourse");
addNewCoursesBtn.addEventListener("click",()=>{
  if(addCoursePopUp.style.visibility == "visible"){
    coursePopUpContainer.style.display = "none";
    addCoursePopUp.style.visibility = "hidden";
  }
  else{
    coursePopUpContainer.style.display = "block";
    addCoursePopUp.style.visibility = "visible";
  }
});

let cancelAddNewAdminBtn = document.querySelector(".cancelAddNewAdminBtn");
cancelAddNewAdminBtn.addEventListener("click",()=>{
  if(addAdminPopUp.style.visibility == "visible"){
    adminPopUpContainer.style.display = "none";
    addAdminPopUp.style.visibility = "hidden";
    };
});
let cancelAddNewTeacherBtn = document.querySelector(".cancelAddNewTeacherBtn");
cancelAddNewTeacherBtn.addEventListener("click",()=>{
  if(addTeacherPopUp.style.visibility == "visible"){
    teacherPopUpContainer.style.display = "none";
    addTeacherPopUp.style.visibility = "hidden";
    };
});
let cancelAddNewStudentBtn = document.querySelector(".cancelAddNewStudentBtn");
cancelAddNewStudentBtn.addEventListener("click",()=>{
  if(addStudentPopUp.style.visibility == "visible"){
    studentPopUpContainer.style.display = "none";
    addStudentPopUp.style.visibility = "hidden";
    };
});

let cancelAddNewCourseBtn = document.querySelector(".cancelAddNewCourseBtn");
cancelAddNewCourseBtn.addEventListener("click",()=>{
  if(addCoursePopUp.style.visibility == "visible"){
    coursePopUpContainer.style.display = "none";
    addCoursePopUp.style.visibility = "hidden";
    };
});

let removeStudent = document.getElementById("removeStudent");
removeStudent.addEventListener("click",()=>{
  renderStudents();
});
function renderStudents() {
  let table = document.createElement("table");
  studentsList.innerHTML = '';
  studentsList.appendChild(table);
  table.innerHTML = `
  <tr class = "bg-primary">
    <th>Roll No</th>
    <th>Name</th>
    <th>Delete</th>
  </tr>
  ${students.map((student)=>`
    <tr>
      <td> ${student.roll_no}</td>
      <td> ${student.name}</td>
      <td> 
        <div class = "delete-btn pointer">
            <i class="ri-delete-bin-line color-danger"></i>
        </div>
      </td>
    </tr>
`).join('')}`;

  document.querySelectorAll(".delete-btn").forEach((btn, index) => {
      btn.addEventListener("click", () => {
          notify("color-danger",students[index].name + " is deleted.");
          students.splice(index, 1);
          totalStudents();
          renderStudents();
      });
  });
}
//remove teacher

let removeTeacher = document.getElementById("removeTeacher");
removeTeacher.addEventListener("click",()=>{
  renderTeachers();
});
function renderTeachers() {
  let table = document.createElement("table");
  teachersList.innerHTML = '';
  teachersList.appendChild(table);
  table.innerHTML = `
  <tr class = "bg-primary">
    <th>ID</th>
    <th>Name</th>
    <th>Delete</th>
  </tr>
  ${teachers.map((teacher)=>`
    <tr>
      <td> ${teacher.teacher_id}</td>
      <td> ${teacher.name}</td>
      <td> 
        <div class = "delete-btn pointer">
            <i class="ri-delete-bin-line color-danger"></i>
        </div>
      </td>
    </tr>
`).join('')}`;

  document.querySelectorAll(".delete-btn").forEach((btn, index) => {
      btn.addEventListener("click", () => {
          notify("color-danger",teachers[index].name + " is deleted.");
          teachers.splice(index, 1);
          totalTeachers();
          renderTeachers();
      });
  });
}

//remove admin

let removeAdmin = document.getElementById("removeAdmin");
removeAdmin.addEventListener("click",()=>{
  renderAdmins();
});

function  renderAdmins() {
  let table = document.createElement("table");
  adminList.innerHTML = '';
  adminList.appendChild(table);
  table.innerHTML = `
  <tr class = "bg-primary">
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Delete</th>
  </tr>
  ${admins.map((admin)=>`
    <tr>
      <td> ${admin.name}</td>
      <td> ${admin.email}</td>
      <td> ${admin.password}</td>
      <td> 
        <div class = "delete-btn pointer">
            <i class="ri-delete-bin-line color-danger"></i>
        </div>
      </td>
    </tr>
`).join('')}`;

  document.querySelectorAll(".delete-btn").forEach((btn, index) => {
      btn.addEventListener("click", () => {
        notify("color-danger",admins[index].name + " is deleted.");
          admins.splice(index, 1);
          // totalAdmins();
          renderAdmins();
      });
  });
}


let removeCourse = document.getElementById("removeCourse");
removeCourse.addEventListener("click",()=>{
  renderCourses();
});


function  renderCourses() {
  let table = document.createElement("table");
  coursesList.innerHTML = '';
  coursesList.appendChild(table);
  table.innerHTML = `
  <tr class="bg-primary">
    <th>Course</th>
    <th>Duration</th>
    <th>Fee</th>
    <th>Delete</th>
  </tr>
  ${courses.map((course)=>`
    <tr>
      <td> ${course.course_name}</td>
      <td> ${course.course_duration}</td>
      <td> ${course.course_fee}</td>
      <td> 
        <div class = "delete-btn pointer">
            <i class="ri-delete-bin-line color-danger"></i>
        </div>
      </td>
    </tr>
`).join('')}`;
  
  document.querySelectorAll(".delete-btn").forEach((btn, index) => {
      btn.addEventListener("click", () => {
        notify("color-danger",courses[index].course_name + " is deleted.");
          courses.splice(index, 1);
          totalCourses();
          renderCourses();
      });
  });
}
document.addEventListener("DOMContentLoaded",()=>{
  totalCourses();
});






