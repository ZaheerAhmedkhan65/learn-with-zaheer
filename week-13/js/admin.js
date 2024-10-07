import { Person } from "./person.js";
class Admin extends Person{
    constructor(name,father_name,gender,dob,email,password){
      super(name,father_name,gender,dob);
      this.email = email;
      this.password = password;
    }
    
  }
  export{
    Admin
  };