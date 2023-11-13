const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

/*function removelogin() {

    document.getElementById("active").classList.remove('logsec');
  }*/

  function removelogin() {
    var element = document.getElementById("login-section");
    /*element.classList.toggle("login-section");
    element.classList.remove("form-box register");
    element.classList.remove("form-box login");*/
  }