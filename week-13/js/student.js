import { Person } from "./person.js";
class Student extends Person{
    static roll_no_count = 1001; 
    constructor(name,father_name,gender,dob,grade,fee,fee_status){
      super(name,father_name,gender,dob);
      this.roll_no = Student.roll_no_count++;
      this.grade = grade;
      this.course = [];
      this.fee = fee;
      this.fee_status = fee_status;
    }
    
  }
  export{
    Student
  };