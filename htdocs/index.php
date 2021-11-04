<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>Assignment 07 - Humphrey, Adrian</title>
      <script src="script.js" defer></script>
   </head>
   <style>
   p{
     display: inline-block;
   }
   </style>
   <body>
      <form>
         <h1>User Registration</h1>

         <div>
            <label for="firstName">First Name: </label> <!-- Done -->
            <input type="text" id="firstName" name="firstName">
            <p id="errorFirst"></p>
         </div>
         <div>
            <label for="lastName">Last Name: </label> <!-- Done -->
            <input type="text" id="lastName" name="lastName">
            <p id="errorLast"></p>
         </div>
         <div>
            <label for="userName">Username: </label> <!-- Done -->
            <input type="text" id="userName" name="userName">
            <p id="errorUserName"></p>
         </div>
         <div>
            <label for="email">Email: </label> <!-- Done -->
            <input type="email" id="email" name="email" >
            <p id="errorEmail"></p>
         </div>
         <div>
            <label for="emailConfirm">Confirm Email: </label> <!-- Done -->
            <input type="email" id="emailConfirm" name="emailConfirm" >
            <p id="errorConfEmail"></p>
         </div>
         <div>
            <label for="password">Password: </label> <!-- Done -->
            <input type="password" id="password" name="password" >
            <p id="errorPass"></p>
         </div>
         <div>
            <label for="passwordConfirm">Confirm Password: </label> <!-- Done -->
            <input type="password" id="passwordConfirm" name="passwordConfirm" >
            <p id="errorConfirmPassword"></p>
         </div>
         <div>
            <label for="phoneNumber">Phone Number: </label> <!-- Done -->
            <input type="tel" id="phoneNumber" name="phoneNumber" >
             <p id="errorPhone"></p>
         </div>
         <div>
            <label for="streetAddress">Street Address: </label>
            <input type="text" id="streetAddress" name="streetAddress" >
            <p id="errorStreet"></p>
         </div>
         <div>
            <label for="City">City: </label>
            <input type="text" id="City" name="City" >
            <p id="errorCity"></p>
         </div>
         <div>
            <label for="State">State: </label>
            <input type="text" id="State" name="State" >
            <p id="errorState"></p>
         </div>
         <div>
            <label for="postalCode">Postal Code: </label>
            <input type="text" id="postalCode" name="postalCode" >
            <p id="errorPost"></p>
         </div>
         <div>
            <label for="dob">Date Of Birth: </label>
            <input type="text" id="dob" name="dob" >
            <p id="errorDOB"></p>
         </div>
         <div>
            <input type="submit" id="submit" value="Register">
         </div>
      </form>
   </body>
</html>
