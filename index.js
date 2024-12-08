function userName(signup){
    let userArr = ["afrin","alice","bob","char"];

    if (usersArr.includes(userName)) {
      return "User Already Registered, Please Login";
    } else {
      // Add new username to the array
      usersArr.push(userName);
      return "Signup Successful, Please Login";
    }
}
console.log(registerUser("alice"));
console.log(registerUser("diamond"));

// login code 

function login(userName, password){
  let name = ["bombay","delhi","patna","indore"];
   if (name.includes(userName)) {
     if(password === "Emp@123"){
      return "Login Successful...";
     }else {
            return "Wrong Password...";
        }
    } else {
        return "User Not Found, Please Signup";
   }
}