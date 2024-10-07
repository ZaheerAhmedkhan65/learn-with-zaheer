class Person {
    constructor(name,father_name,gender,dob){
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
  export{
    Person
  };