let email1 = document.getElementById("email")
let passw1 = document.getElementById("passw")
let mycheck1 = document.getElementById("mycheck")
let error2 = document.getElementById("error2")
let error3 = document.getElementById("error3");

error2.style.color='red';
error3.style.color='red';

let userdata = [{
    email: "dinesh@gmail.com",
    password: "dinesh@1996"
}]

function mvalidation() {
    error2.textContent = ""
    let umail = email1.value
    let mindex = umail.substring(umail.indexOf('@') + 1);
    if (umail == "") {
        error2.textContent = "Required"
        return false
    } else if (!umail.includes('@') || mindex == '') {
        error2.textContent = "Please enter correct Email"
        return false
    } else {
        error2.textContent = ""
        return true
    }
}

function pvalidation() {
    error3.textContent = ""
    let upassw = passw1.value
    let pcheck =userdata[0].password
    if (upassw == "") {
        error3.textContent = "Required"
        return false
    } else if (upassw!=pcheck) {
        error3.textContent = "Enter correct passowrd"
        return false
    } else {
        error3.textContent = ""
        return true
    }
}

function totalvalidation() {
    let v1 = mvalidation()
    let v2 = pvalidation()

   
    if (v1 && v2) {
        v3 = usercheck()
        return v1 && v2 && v3
    }
    // return v1 && v2 && v3
}

function usercheck() {
    error1.textContent = ""
    let rcheck = userdata.some(each => each.email == email1.value && each.password == passw1.value)
    if (rcheck) {
        return true
    } else {
        error1.textContent = "Email or Password is incorrect"
        return false
    }
}

function mpchecking() {
    let unew = userdata.some(each => each.email == email1.value && each.password == passw1.value)
    if (mycheck1.checked && unew) {
        return newdata = {
            email: email1.value,
            password: passw1.value
        }
    }
}

function finalsubmit() {
    localStorage.setItem("setNew", JSON.stringify(newdata))

}

let store1 = localStorage.getItem("setNew")
let getstore = JSON.parse(store1)
email1.value = getstore.email;
passw1.value = getstore.password