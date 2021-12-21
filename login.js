function validasi(){
    var username = document.forms["myForm"]
    ["username"].value;
    var password = document.forms["myForm"]
    ["password"].value;
    if(username == "user" && password == "123"){
        return true;
    }
    else if(username == "" || password == ""){
        alert("Masukkan username dan password anda");
        return false;
    }
    else{
        alert("Username atau password yang anda masukkan SALAH");
        return false;
    }
}