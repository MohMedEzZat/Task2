function validate(){
    var name = document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var password =document.getElementById("pass").value;
    var confirmpass =document.getElementById("confirmpass").value;
    var message = document.getElementById("error")

    message.style.background = "red"
    message.style.color = "white"
    message.style.textAlign ="center"
    message.style.padding = "10px"
    message.style.transition = "all 1s ease"
    message.style.marginBottom ="10px"


    if(name==""&& email=="" && password=="" && confirmpass==""){
        message.innerHTML = "Please Enter Data"
        return false;
    }else if(name.length<5 || name.length>15){
        message.innerHTML = "Please Enter 5-15 character in Username "
        return false;
    }else if (email.indexOf("@",3)=="-1" || email.indexOf(".")=="-1"){
        message.innerHTML = "Please Enter Valid E-Mail"
        return false;
        
    }else if (password.length<8){
        message.innerHTML = "Please Enter at Least 8 charater in password"
        return false;
    }else if(password != confirmpass){
        message.innerHTML = "Please Matched Password"
        return false;
    }else{
        return true;
    }
}