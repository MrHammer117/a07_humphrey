document.getElementById("submit").addEventListener("click", function(event){

//Regex
let phoneReg = /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$|^[0-9]{10}$|^[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/;
let postalCodeReg = /^[0-9]{5}$|^[0-9]{5}-[0-9]{4}$/;
let symbolReg = /\!|\.|\%|\&/;
let emailReg = /.+\@.+\..+/;
let upperCaseReg = /[A-Z]/;
let lowerCaseReg = /[a-z]/;
let numReg = /[0-9]/;
//Element Getters

let firstName = document.getElementById("firstName");
let validFirstName = document.getElementById("errorFirst")
let lastName = document.getElementById("lastName");
let validLastName = document.getElementById("errorLast");
let username = document.getElementById("userName");
let validUserName = document.getElementById("errorUserName");
let email = document.getElementById("email");
let validEmail = document.getElementById("errorEmail");
let confEmail = document.getElementById("emailConfirm");
let password = document.getElementById("password");
let validPassword = document.getElementById("errorPass");
let validConfirmEmail = document.getElementById("errorConfEmail");
let confirmPassword = document.getElementById("passwordConfirm");
let validConfirmPass = document.getElementById("errorConfirmPassword");
let submit = document.getElementById("submit");
let phone = document.getElementById("phoneNumber");
let validPhoneNum = document.getElementById("errorPhone");
let address = document.getElementById("streetAddress");
let validAddress = document.getElementById("errorStreet");
let city = document.getElementById("City");
let validCity = document.getElementById("errorCity");
let state = document.getElementById("State");
let validState = document.getElementById("errorState");
let postal = document.getElementById("postalCode");
let validPostal = document.getElementById("errorPost");
let dob = document.getElementById("dob");
let validDOB = document.getElementById("errorDOB");

 // boolean Values for checking
let isValid = true;
let isValid2 = true;
let isValid3 = true;
let isValid4 = true;
let isValid5 = true;
let isValid6 = true;
let isValid7 = true;
let isValid8 = true;
let isValid9 = true;
let isValid10 = true;
let isValid11 = true;
let isValid12 = true;
let isValid13 = true;
let isValid14 = true;
let isValid15 = true;
let isValid16 = true;
let isValid17 = true;
let isValid18 = true;
let isValid19 = true;

function validForm() {

//checks for valid first name

if(firstName.value == ""){
	validFirstName.innerHTML = "<li style='color:red'>Please input a first name</li>";
	firstName.classList.add("error")
	validFirstName.classList.remove("hide");
	firstName.focus();
	isValid = false;
}
else{
	validFirstName.classList.add("hide");
	firstName.classList.remove("error");
	validFirstName.innerHTML = "";
}

//checks for valid last name

if(lastName.value == ""){
	validLastName.innerHTML = "<li style='color:red'>Please input a last name</li>";
	lastName.classList.add("error");
	validLastName.classList.remove("hide");
	lastName.focus();
	isValid2 = false;
}
else{
	validLastName.classList.add("hide");
	lastName.classList.remove("error");
	validLastName.innerHTML = "";
}

if(username.value.length < 5){
	validUserName.innerHTML = "<li style='color:red'>Username is too short, it should be between 5 to 12 characters.</li>";
	username.classList.add("error");
	validUserName.classList.remove("hide");
	username.focus();
	isValid3 = false;
}
else if(username.value.length > 12){
	validUserName.innerHTML = "<li style='color:red'>Username is too long, it should be between 5 to 12 characters.</li>";
	username.classList.add("error");
	validUserName.classList.remove("hide");
	username.focus();
	isValid4 = false;
}
else{
	validUserName.classList.add("hide");
	username.classList.remove("error");
	validUserName.innerHTML = "";
}

if(!emailReg.test(email.value)){
	validEmail.innerHTML = "<li style='color:red'>Please input a valid email address</li>"
	email.classList.add("error");
	validEmail.classList.remove("hide");
	email.focus();
	isValid11 = false;
}
else{
	validEmail.classList.add("hide");
	email.classList.remove("error");
	validEmail.innerHTML = "";
}

if(confEmail.value != email.value || confEmail.value == ""){
	validConfirmEmail.innerHTML = "<li style='color:red'>Your email does not match your confirmation input</li>"
	confEmail.classList.add("error");
	validConfirmEmail.classList.remove("hide");
	email.classList.add("error");
	confEmail.focus();
	isValid12 = false;
}
else{
	validConfirmEmail.classList.add("hide");
	confEmail.classList.remove("error");
	email.classList.remove("error");
	validConfirmEmail.innerHTML = "";
}

if(password.value.length < 5){
	validPassword.innerHTML = "<li style='color:red'>Password is too short, it should be between 5 and 12 characters in length</li>";
	password.classList.add("error");
	validPassword.classList.remove("hide");
	password.focus();
	isValid13 = false;
}
else if(password.value.length > 12){
	validPassword.innerHTML = "<li style='color:red'>Password is too long, it should be between 5 and 12 characters in length</li>";
	password.classList.add("error");
	validPassword.classList.remove("hide");
	password.focus();
	isValid14 = false;
}
else if(!upperCaseReg.test(password.value)){
	validPassword.innerHTML = "<li style='color:red'>Password must contain an uppercase letter</li>";
	password.classList.add("error");
	validPassword.classList.remove("hide");
	password.focus();
	isValid15 = false;
}
else if(!lowerCaseReg.test(password.value)){
	validPassword.innerHTML = "<li style='color:red'>Password must contain a lowercase letter</li>";
	password.classList.add("error");
	validPassword.classList.remove("hide");
	password.focus();
	isValid16 = false;
}
else if(!numReg.test(password.value)){
	validPassword.innerHTML = "<li style='color:red'>Password must contain a digit</li>";
	password.classList.add("error");
	validPassword.classList.remove("hide");
	password.focus();
	isValid17 = false;
}
else if(!symbolReg.test(password.value)){
	validPassword.innerHTML = "<li style='color:red'>Password must contain a symbol: (!, ., %, &)</li>";
	password.classList.add("error");
	validPassword.classList.remove("hide");
	password.focus();
	isValid18 = false;
}
else{
	validPassword.classList.add("hide");
	password.classList.remove("error");
	validPassword.innerHTML = "";
}

if(confirmPassword.value != password.value || confirmPassword.value == ""){
	validConfirmPass.innerHTML = "<li style='color:red'>Your password and confirmation don't match</li>";
	password.classList.add("error");
	confirmPassword.classList.add("error");
	validConfirmPass.classList.remove("hide");
	confirmPassword.focus();
	isValid19 = false;
}
else{
	validConfirmPass.classList.add("hide");
		password.classList.remove("error");
	confirmPassword.classList.remove("error");
	validConfirmPass.innerHTML = "";
}

if(!phoneReg.test(phone.value)){
	validPhoneNum.innerHTML = "<li style='color:red'>Phone number must be in one of the following formats: (XXX) XXX-XXXX, XXX-XXX-XXXX, XXXXXXXXXX, XXX XXX XXXX</li>";
	 phone.classList.add("error");
	 validPhoneNum.classList.remove("hide");
	phone.focus();
	 isValid5 = false;
}
else{
	validPhoneNum.classList.add("hide");
	phone.classList.remove("error");
	validPhoneNum.innerHTML = "";
}
if(address.value == ""){
	validAddress.innerHTML = "<li style='color:red'>Must provide a street address</li>";
	address.classList.add("error");
	validAddress.classList.remove("hide");
	address.focus();
	isValid6 = false;
}
else
{
	validAddress.classList.add("hide");
	address.classList.remove("error");
	validAddress.innerHTML = "";
}

if(city.value == ""){
	validCity.innerHTML = "<li style='color:red'>Please input your city</li>";
	city.classList.add("error");
	validCity.classList.remove("hide");
	city.focus();
	isValid7 = false;
}
else{
	validCity.classList.add("hide");
	city.classList.remove("error");
	validCity.innerHTML = "";
}

if(state.value == ""){
	validState.innerHTML = "<li style='color:red'>Please input your state</li>";
	state.classList.add("error");
	validState.classList.remove("hide");
	state.focus();
	isValid8 = false;
}
else{
	validState.classList.add("hide");
	state.classList.remove("error");
	validState.innerHTML = "";
}
if(!postalCodeReg.test(postal.value)){
	validPostal.innerHTML = "<li style='color:red'>Postal code must be in one of the following formats: XXXXX-XXXX, or XXXXX</li>";
	 postal.classList.add("error");
	 validPostal.classList.remove("hide");
	 postal.focus();
	 isValid9 = false;
}
else{
	validPostal.classList.add("hide");
	postal.classList.remove("error");
	validPostal.innerHTML = "";
}

if(dob.value == ""){
	validDOB.innerHTML = "<li style='color:red'>Please input a date of birth</li>";
	dob.classList.add("error");
	validDOB.classList.remove("hide");
	dob.focus();
	isValid10 = false;
}
else{
	validDOB.classList.add("hide");
	dob.classList.remove("error");
	validDOB.innerHTML = "";
}

if(isValid == false || isValid2 == false || isValid3 == false || isValid4 == false || isValid5 == false || isValid6 == false
|| isValid7 == false || isValid8 == false || isValid9 == false || isValid10 == false || isValid11 == false || isValid12 || false
|| isValid13 == false || isValid14 == false || isValid15 == false || isValid16 == false || isValid17 == false || isValid18 == false
|| isValid19 == false){
	return false;
}else{
	return true;
}

}
var booleanVal = validForm();

if (booleanVal == false){
	event.preventDefault();
}


});
