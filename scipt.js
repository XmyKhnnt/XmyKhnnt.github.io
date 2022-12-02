function formValidation() {
    if (document.myform.firstname.value == "") {
        alert("Please enter firsname");
    } else if (document.myform.middlename.value == ""){
        alert("Please enter middlename");
    } else if (document.myform.lastname.value == "") {
        alert('please enter lastname');
    } else if (document.myform.date.value =="") {
        alert("Please enter your birthdate");
    } else if (document.myform.email.value == "") {
        alert("Please enterr your email");
    } else if (document.myform.username.value ==""){
        alert("Please enter your username");
    } else if (document.myform.password.value =="") {
        alert("Please enter your password");
    } else if (document.myform.checkPass.value == "") {
        alert("Please reenter your password");
    } else if (document.myform.password.value  != document.myform.checkPass.value){
        alert("Your password did not match..")
    } else if (!document.myform.checkbox.checked) {
        alert("Please agree to terms and conditions")
    } else {
        alert("Login successful")
    }

}
