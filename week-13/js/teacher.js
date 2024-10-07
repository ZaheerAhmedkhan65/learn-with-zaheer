import { Staff } from "./staff.js";
class Teacher extends Staff{
       static teacher_id_count = 1000 ;
    constructor(name,father_name,gender,dob,qualification,salary,salary_status){
      super(name,father_name,gender,dob,qualification,salary,salary_status);
      this.teacher_id = Teacher.teacher_id_count++;
    }
  }
  export{
    Teacher
  };