let userId =  /^[a-z0-9]{5,12}$/

let txtUser = document.getElementById('txtUser')
let errorName = document.getElementById('errorName')
let submit = document.getElementById('btn')

submit.addEventListener('click',function(e){
    e.preventDefault();
    if (userId.test(txtUser.value)){
        errorName.textContent = 'Bạn có thể sử dụng tên này'
        errorName.style.color = 'blue'
    } else {
        errorName.textContent = 'Bạn không thể sử dụng tên này'
        errorName.style.color = 'red'
    }

})


let email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let txtEmail = document.getElementById('txtEmail')
let errorEmail = document.getElementById('errorEmail')

submit.addEventListener('click',function(e){
    e.preventDefault();
    if (email.test(txtEmail.value)){
        errorEmail.textContent = 'Email này sử dụng được'
        errorEmail.style.color = 'blue'
    }else {
        errorEmail.textContent = 'Không sử dụng được email này'
        errorEmail.style.color = 'red'
    }
})

let pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

let txtPass = document.getElementById('txtPass')
let errorPass = document.getElementById('errorPass')

submit.addEventListener('click',function(e){
    e.preventDefault();
    if (pass.test(txtPass.value)){
        errorPass.textContent = 'Hợp lệ'
        errorPass.style.color = 'blue'
    } else {
        errorPass.textContent = 'Không hợp lệ'
        errorPass.style.color = 'red'
    }

})

let txtConfirm = document.getElementById('txtConfirm')
let errorConfirm = document.getElementById('errorConfirm')

function checkMatchPassError(passwordInput, cfpasswordInput) {
    if (passwordInput.value === cfpasswordInput.value)
    {
        errorConfirm.textContent = 'Mật khẩu đã trùng'
        errorConfirm.style.color = 'blue'
    }else {
        errorConfirm.textContent = 'Mật khẩu không trùng khớp'
        errorConfirm.style.color = 'red'
    }
}

submit.addEventListener('click',function(e){
    e.preventDefault();
    let isMatchError =  checkMatchPassError(txtPass, txtConfirm)
})



