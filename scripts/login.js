//var loginbtn = document.querySelector(".login-btn");
var sessionUsername;
console.log('loginloaded');
function validate(){

  var username = document.getElementById("userName").value;
  console.log(username);
  if(username == ''){
      document.getElementById("error-show").innerHTML = 'please enter username';
  }
  else{
    sessionUsername = username;
    window.location.assign('home.html');
  }
}




document.getElementById("login-btn").addEventListener('click', evt =>{
  evt.preventDefault();
  validate();
})
