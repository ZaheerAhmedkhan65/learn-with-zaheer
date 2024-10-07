
var set_password = ["786pak", "lahore123", "welcome"]
var set_email = ["rana@gmail.com", "iam@gmail.com", "123@gmail.com"]
var pass_array_size = set_password.length;
var email_array_size = set_email.length;


function get_user_login_password() { // sign in function
    var get_password = document.getElementById('password');
    var get_email = document.getElementById('email');

    for (var i = 0; i < pass_array_size; ++i) {
        if (i <= pass_array_size) {
            if (set_password[i] == get_password.value && set_email[i] == get_email.value) {
                alert('welcome! You have sign in');
                window.open("welcome_page.html");
            }
        }
    }

    if (get_password.value == ' ' && get_email.value == ' ' || set_password != get_password.value && set_email != get_email.value) {
        alert('Invalid email or password!');
    }
}
function display() {
    document.getElementById("show_email").innerHTML = set_email.value[0];
}

function set_forget_password() { //reset forget passwprd function
    let new_password = document.getElementById('password1');
    var set_user_email = document.getElementById('email');
    set_password = (new_password.value);
    set_email = (set_user_email.value);
    document.getElementById('show_pass').innerHTML = new_password.value;
    document.getElementById('show_email').innerHTML = set_user_email.value;
    //to check if email exists or not
    for(var i=0;i<email_array_size;i++){
        if (i <= email_array_size){
    if(set_user_email.value==set_email[i]){
//tell user to insert a strong password
let strong_password = new_password.value.length;
if (strong_password < 8) {
    alert(new_password.value + '! is a weak password.Please choose a strong Password of at least 8 Latters.');
} else {
    alert('Password Updated Successfully!');
    window.open("login_page.html");
}
    } 
    else{
        alert(set_user_email.value +' email does not exist!');
    }
    }
}
}

function sign_up() { //signup function
    var set_user_password = document.getElementById('password');
    var set_user_email = document.getElementById('email');
    //check if the user have put an input of both password and email
    if (set_user_password.value <= ' ' && set_user_email.value <= ' ') {
        alert('Please enter password or email!');
    }
    else {
        //  check if an email  already exists 
        for (var i = 0; i < email_array_size; i++) {
            if (set_user_email.value == set_email[i]) {
                alert(set_user_email.value + ' : already exists.Please choose other email.');
                return 0;
            }
            else {
                set_email.push(set_user_email);
                set_password.push(set_user_password);
            }
        }
    }

    if (set_user_email.value != set_email.value && set_user_email.value > ' ') {
        alert('You have Sign up with Email : ' + set_user_email.value);
        window.open("welcome_page.html");
    }
}

function back_to_login_page() {
    window.open("login_page.html");
}
function show_pass(){
    let show = document.getElementById('show_icon');
    let hide = document.getElementById('hide_icon');
    let passType = document.getElementById('password');
    if(passType.type=="text"){
        passType.type="password";
        hide.style.visibility="visible";
        show.style.visibility="hidden";
    }
    else{
        passType.type="text";
        hide.style.visibility="hidden";
        show.style.visibility="visible";
    }
}
// function hide_pass(){
// document.getElementById('password').type="password";
// }