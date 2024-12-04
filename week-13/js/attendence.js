
class Attendence{
   constructor(date,status){
    this.date = date;
    this.status = status;
   }

//status will be present or absent
   getDetails(){
    console.log("Date : " + this.date);
    console.log("Status : " + this.status);
   }
   
   updateStatus(status){
    this.status = status;
   }

   updateDate(date){
    this.date = date;
   }

}

export{
    Attendence
};