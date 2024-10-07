import { Staff } from "./staff.js";
class Employee extends Staff{
    constructor(staffType,hireDate,employee_id){
      super(staffType,hireDate,staffType,hireDate,qualification,salary,salary_status);
      this.employee_id = employee_id;
    }
    
  }
  export{
    Employee
  };