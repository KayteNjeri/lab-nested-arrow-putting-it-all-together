//the userInfo object & parameters
const userInfo =
  {
    "username": "user1",
    "password": "password123"
};
//creating the createLoginTracker function which will initialize the login feature
function createLoginTracker (userInfo) {
  const {username, password} = userInfo;
    // Initialize the variable attemptCount
  let attemptCount = 0;
  const maxLoginAttempt = 3; // users to attempt login upto 3 times
// Arrow function to handle each login attempt
  return (passwordAttempt) => {
    attemptCount++; //increment the attemptCount any time it is called
    
    console.log("Attempt:", attemptCount);
    console.log("Password entered:", passwordAttempt);
   
    //Check if password entered matches the password in the object
    if (passwordAttempt === password && attemptCount <= maxLoginAttempt) { //if password match and attempted logins are less than 3
      console.log("Login success");
      return("Login successful"); // return 'login successful'
    } 
    else if (passwordAttempt !== password && attemptCount <= maxLoginAttempt) { //if password does not match and attempted logins are less than 3
      console.log("Login fail");
      return(`Attempt ${attemptCount}: Login failed`); //display this message
    }
    if (passwordAttempt !== password && attemptCount > maxLoginAttempt) { //if password is incorrect and attempted logins are more than 3
      console.log("Account locked");
      return("Account locked due to too many failed login attempts"); //display this message
    };
  };
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

