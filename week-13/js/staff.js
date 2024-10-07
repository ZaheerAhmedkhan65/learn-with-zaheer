import { Person } from "./person.js";

class Staff extends Person{
         static today = new Date();
    constructor(name,father_name,gender,dob,qualification,salary,salary_status){
         super(name,father_name,gender,dob);
         this.hireDate = Staff.today.toDateString();
         this.qualification = qualification;
         this.salary = salary;
         this.salary_status = salary_status;
    }     
  }
  export{
    Staff
  };