import * as utility from "./js/variables.js"
import { Person } from "./js/person.js";
import { Staff } from "./js/staff.js";
import { Admin } from "./js/admin.js";
import { Teacher } from "./js/teacher.js";
import { Employee } from "./js/employee.js";
import { Student } from "./js/student.js";
import { Course } from "./js/course.js";
import { Attendence } from "./js/attendence.js";
import { Exam } from "./js/exam.js";
import { Grades } from "./js/grades.js";

document.addEventListener("DOMContentLoaded",()=>{
  typeWriter();
  updateTotalCount(studentCount,studentsDetail);// displays total students
  updateTotalCount(teacherCount,teachersDetail);// displays total teachers
  updateTotalCount(coursesCount,coursesDetail);// displays total courses
  updateTotalCount(adminsCount,adminsDetail);// displays total admins
});

addNewAdminBtn.addEventListener("click", () => togglePopUp(adminPopUpContainer, addAdminPopUp));
addNewTeacherBtn.addEventListener("click", () => togglePopUp(teacherPopUpContainer, addTeacherPopUp));
addNewStudentBtn.addEventListener("click", () => togglePopUp(studentPopUpContainer, addStudentPopUp));
addNewCoursesBtn.addEventListener("click", () => togglePopUp(coursePopUpContainer, addCoursePopUp));



addNewAdmin.addEventListener("click", () => {
  let adminName = document.getElementById("adminName").value;
  let adminFatherName = document.getElementById("adminFatherName").value;
  let adminGender = document.getElementById("adminGender").value;
  let adminDob = document.getElementById("adminDob").value;
  let adminEmail = document.getElementById("adminEmail").value;
  let adminPass = document.getElementById("adminPassword").value;

  if (checkEmptyFields([adminName, adminFatherName, adminGender, adminDob, adminEmail, adminPass])) {
    notify("color-danger", "Please fill all the input fields!");
    return;
  }

  newAdmin = new Admin(capitalizeName(adminName), capitalizeName(adminFatherName), adminGender, adminDob, adminEmail, adminPass);
  addNewEntity( //add admin
    adminsDetail,
    newAdmin,
    dupAdmin => dupAdmin.name === newAdmin.name &&
      dupAdmin.father_name === newAdmin.father_name &&
      dupAdmin.dob === newAdmin.dob &&
      dupAdmin.gender === newAdmin.gender &&
      dupAdmin.email === newAdmin.email &&
      dupAdmin.password === newAdmin.password,
    "name"
  );

  updateTotalCount(adminsCount,adminsDetail) //updates total admins

  const headers = ["Name", "Father Name", "Gender", "Date Of Birth", " Email", "Password"];
  createTable(adminList, adminsDetail, headers, (admin) => `
      <tr>
        <td>${admin.name}</td>
        <td>${admin.father_name}</td>
        <td>${admin.gender}</td>
        <td>${admin.dob}</td>
        <td>${admin.email}</td>
        <td> 
          <div class="d-flex align-center justify-content-between gap-10">
            <input class="adminPass border-none outline-none bg-transparent w-100" type="password" value='${admin.password}' readonly>
            <div class="eyeIcon pointer">
              <i class="ri-eye-line"></i>
            <div>
          </div>
        </td>
      </tr>
    `);
  // Admin Password hide and show
  showAdminPass();

  document.getElementById("adminName").value = '';
  document.getElementById("adminFatherName").value = '';
  document.getElementById("adminGender").value = '';
  document.getElementById("adminDob").value = '';
  document.getElementById("adminEmail").value = '';
  document.getElementById("adminPassword").value = '';
});

addNewStudent.addEventListener("click", () => {
  let studentName = document.getElementById("studentName").value;
  let studentFatherName = document.getElementById("studentFatherName").value;
  let studentGender = document.getElementById("studentGender").value;
  let studentDob = document.getElementById("studentDob").value;
  let studentGrade = document.getElementById("studentGrade").value;

  if (checkEmptyFields([studentName, studentFatherName, studentGender, studentDob, studentGrade])) {
    notify("color-danger", "Please fill all the input fields!");
    return;
  }

  let studentFee;
  let studentCourse;

  for (let i = 0; i < coursesDetail.length; i++) {
    if (studentGrade === coursesDetail[i].course_name) {
      studentCourse = coursesDetail[i].course_name;
      studentFee = coursesDetail[i].course_fee;
      totalFee += studentFee;
      updateFeeCount(feeCount, totalFee)
    }
  }

  newStudent = new Student(capitalizeName(studentName), capitalizeName(studentFatherName), studentGender, studentDob, studentCourse, studentGrade, studentFee, "pending");
  addNewEntity( //add student
    studentsDetail,
    newStudent,
    dupStudent => dupStudent.name === newStudent.name &&
      dupStudent.father_name === newStudent.father_name &&
      dupStudent.dob === newStudent.dob &&
      dupStudent.gender === newStudent.gender,
    "name"
  );

  updateTotalCount(studentCount, studentsDetail);//updates total students

  const headers = ["Roll Number", "Name", "Father Name", "Gender", "Date Of Birth", " Grade", "Fee", "Fee status"];
  createTable(studentsList, studentsDetail, headers, (student) => `
      <tr>
        <td>${student.roll_no}</td>
        <td>${student.name}</td>
        <td>${student.father_name}</td>
        <td>${student.gender}</td>
        <td>${student.dob}</td>
        <td>${student.grade}</td>
        <td>${student.fee}</td>
        <td>${student.fee_status}</td>
      </tr>
    `);
  document.getElementById("studentName").value = '';
  document.getElementById("studentFatherName").value = '';
  document.getElementById("studentGender").value = '';
  document.getElementById("studentDob").value = '';
  document.getElementById("studentGrade").value = '';
});


addNewTeacher.addEventListener("click", () => {
  let teacherName = document.getElementById("teacherName").value;
  let teacherFatherName = document.getElementById("teacherFatherName").value;
  let teacherGender = document.getElementById("teacherGender").value;
  let teacherDob = document.getElementById("teacherDob").value;
  let teacherQualification = document.getElementById("teacherQualification").value;
  let teacherSalary = document.getElementById("teacherSalary").value;

  if (checkEmptyFields([teacherName, teacherFatherName, teacherGender, teacherDob, teacherQualification, teacherSalary])) {
    notify("color-danger", "Please fill all the input fields!");
    return;
  }
  newTeacher = new Teacher(capitalizeName(teacherName), capitalizeName(teacherFatherName), teacherGender, teacherDob, teacherQualification, teacherSalary, "pending");

  addNewEntity( //add teacher
    teachersDetail,
    newTeacher,
    dupTeacher => dupTeacher.name === newTeacher.name &&
      dupTeacher.father_name === newTeacher.father_name &&
      dupTeacher.dob === newTeacher.dob &&
      dupTeacher.gender === newTeacher.gender,
    "name"
  );

  updateTotalCount(teacherCount, teachersDetail) //updates total teachers

  const headers = ["Teacher ID", "Name", "Father Name", "Gender", "Date Of Birth", "Joining Date", " Qualification", "Salary", "Salary status"];
  createTable(teachersList, teachersDetail, headers, (teacher) => `
      <tr>
        <td>${teacher.teacher_id}</td>
        <td>${teacher.name}</td>
        <td>${teacher.father_name}</td>
        <td>${teacher.gender}</td>
        <td>${teacher.dob}</td>
        <td>${teacher.hireDate}</td>
        <td>${teacher.qualification}</td>
        <td>${teacher.salary}</td>
        <td>${teacher.salary_status}</td>
      </tr>
    `);

  document.getElementById("teacherName").value = '';
  document.getElementById("teacherFatherName").value = '';
  document.getElementById("teacherGender").value = '';
  document.getElementById("teacherDob").value = '';
  document.getElementById("teacherQualification").value = '';
  document.getElementById("teacherSalary").value = '';
});


addNewCourse.addEventListener("click", () => {
  let courseName = document.getElementById("courseName").value;
  let courseDuration = document.getElementById("courseDuration").value;
  let courseFee = document.getElementById("courseFee").value;

  if (checkEmptyFields([courseName, courseDuration, courseFee])) {
    notify("color-danger", "Please fill all the input fields!");
    return;
  }

  newCourse = new Course(capitalizeName(courseName), capitalizeName(courseDuration), courseFee);

  addNewEntity( //add course
    coursesDetail,
    newCourse,
    dunCourse => dunCourse.course_name === newCourse.course_name &&
      dunCourse.course_duration === newCourse.course_duration &&
      dunCourse.course_fee === newCourse.course_fee ,
      "course_name"
  );
  
  updateTotalCount(coursesCount, coursesDetail) //updates total courses

  const headers = ["Course Name", "Duration", "Course Fee"];
  createTable(coursesList, coursesDetail, headers, (course) => `
      <tr>
        <td>${course.course_name}</td>
        <td>${course.course_duration}</td>
        <td>${course.course_fee}</td>
      </tr>
    `);

  document.getElementById("courseName").value = '';
  document.getElementById("courseDuration").value = '';
  document.getElementById("courseFee").value = '';
});

cancelAddNewAdminBtn.addEventListener("click", () => cancelPopUp(adminPopUpContainer, addAdminPopUp));

cancelAddNewTeacherBtn.addEventListener("click", () => cancelPopUp(teacherPopUpContainer, addTeacherPopUp));

cancelAddNewStudentBtn.addEventListener("click", () => cancelPopUp(studentPopUpContainer, addStudentPopUp));

cancelAddNewCourseBtn.addEventListener("click", () => cancelPopUp(coursePopUpContainer, addCoursePopUp));



//Show Students
showStudents.addEventListener("click", () => {
  if (studentsList.innerHTML == '') { // if table not created then 
    if (studentsDetail.length == 0) { // if no any student exist then return an error
      notify("color-danger", "No Student Exists in the List!");
      return;
    }
    const headers = ["Roll Number", "Name", "Father Name", "Gender", "Date Of Birth", " Grade", "Fee", "Fee status"];
    createTable(studentsList, studentsDetail, headers, (student) => `
        <tr>
          <td>${student.roll_no}</td>
          <td>${student.name}</td>
          <td>${student.father_name}</td>
          <td>${student.gender}</td>
          <td>${student.dob}</td>
          <td>${student.grade}</td>
          <td>${student.fee}</td>
          <td>${student.fee_status}</td>
        </tr>
      `);
  }
  else { // if table already created
    studentsList.innerHTML = '';
  }
});

//Show Students
showAdmin.addEventListener("click", () => {
  if (adminList.innerHTML == '') { // if table not created then 
    if (adminsDetail.length == 0) { // if no any admin exist then return an error
      notify("color-danger", "No Admin Exists in the List!");
      return;
    }
    const headers = ["Name", "Father Name", "Gender", "Date Of Birth", " Email", "Password"];
    createTable(adminList, adminsDetail, headers, (admin) => `
      <tr>
        <td>${admin.name}</td>
        <td>${admin.father_name}</td>
        <td>${admin.gender}</td>
        <td>${admin.dob}</td>
        <td>${admin.email}</td>
        <td> 
          <div class="d-flex align-center justify-content-between gap-10">
            <input class="adminPass border-none outline-none bg-transparent w-100" type="password" value='${admin.password}' readonly>
            <div class="eyeIcon pointer">
              <i class="ri-eye-line"></i>
            <div>
          </div>
        </td>
      </tr>
    `);
    // Admin Password hide and show
    showAdminPass();

  }
  else { // if table already created
    adminList.innerHTML = '';
  }
});

//show Teachers
showTeachers.addEventListener("click", () => {
  if (teachersList.innerHTML == '') {// if table not created then
    if (teachersDetail.length == 0) { // if no any teacher exist then return an error
      notify("color-danger", "No Teacher Exists in the List!");
      return;
    }
    const headers = ["Teacher ID", "Name", "Father Name", "Gender", "Date Of Birth", "Joining Date", " Qualification", "Salary", "Salary status"];
    createTable(teachersList, teachersDetail, headers, (teacher) => `
      <tr>
        <td>${teacher.teacher_id}</td>
        <td>${teacher.name}</td>
        <td>${teacher.father_name}</td>
        <td>${teacher.gender}</td>
        <td>${teacher.dob}</td>
        <td>${teacher.hireDate}</td>
        <td>${teacher.qualification}</td>
        <td>${teacher.salary}</td>
        <td>${teacher.salary_status}</td>
      </tr>
    `);
  }
  else {// if table already created
    teachersList.innerHTML = '';
  }
});

//show Courses
showCourses.addEventListener("click", () => {
  if (coursesList.innerHTML == '') {// if table not created then
    if (coursesDetail.length == 0) { // if no any course exist then return an error
      notify("color-danger", "No Course Exists in the List!");
      return;
    }
    const headers = ["Course Name", "Duration", "Course Fee"];
    createTable(coursesList, coursesDetail, headers, (course) => `
      <tr>
        <td>${course.course_name}</td>
        <td>${course.course_duration}</td>
        <td>${course.course_fee}</td>
      </tr>
    `);
  }
  else {
    coursesList.innerHTML = '' // if table already created
  }
})


// Remove Students
removeStudent.addEventListener("click", () => {
  renderEntities(
    studentsList,
    studentsDetail,
    ["Roll No", "Name"],
    (student) => `
        <tr>
          <td>${student.roll_no}</td>
          <td>${student.name}</td>
          <td>
            <div class="delete-btn pointer">
              <i class="ri-delete-bin-line color-danger"></i>
            </div>
          </td>
        </tr>
      `,
      studentCount,
      studentsDetail
  );
});

// Remove admin
removeAdmin.addEventListener("click", () => {
  renderEntities(
    adminList,
    adminsDetail,
    ["Name", "Email", "Password"],
    (admin) => `
        <tr>
          <td>${admin.name}</td>
          <td>${admin.email}</td>
          <td> 
            <div class="d-flex align-center justify-content-between gap-10">
              <input class="adminPass border-none outline-none bg-transparent w-100" type="password" value='${admin.password}' readonly>
              <div class="eyeIcon pointer">
                <i class="ri-eye-line"></i>
              </div>
            </div>
          </td>
          <td>
            <div class="delete-btn pointer">
              <i class="ri-delete-bin-line color-danger"></i>
            </div>
          </td>
        </tr>
      `,
      adminsCount,
      adminsDetail
  );
  showAdminPass();
  });
  

// Remove Teachers
removeTeacher.addEventListener("click", () => {
  renderEntities(
    teachersList,
    teachersDetail,
    ["ID", "Name"],
    (teacher) => `
      <tr>
        <td>${teacher.teacher_id}</td>
        <td>${teacher.name}</td>
        <td>
          <div class="delete-btn pointer">
            <i class="ri-delete-bin-line color-danger"></i>
          </div>
        </td>
      </tr>
    `,
    teacherCount,
    teachersDetail
  );
});

// Remove Courses
removeCourse.addEventListener("click", () => {
  renderEntities(
    coursesList,
    coursesDetail,
    ["Course Name", "Duration", "Fee"],
    (course) => `
      <tr>
        <td>${course.course_name}</td>
        <td>${course.course_duration}</td>
        <td>${course.course_fee}</td>
        <td>
          <div class="delete-btn pointer">
            <i class="ri-delete-bin-line color-danger"></i>
          </div>
        </td>
      </tr>`,
      coursesCount,
      coursesDetail
  );
});



