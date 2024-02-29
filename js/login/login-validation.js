const loginEmail = document.querySelector('#email')
const loginPassword = document.querySelector('#password')
const loginBtn = document.querySelector('.login-button')

let validation = true

function botarNome(text, element, regex) {
    if(regex.test(text)) {
        element.style.borderBottomColor = "green"

        validation = true
    }

    else {
        element.style.borderBottomColor = "#F25E5A"

        validation = false

    }
}

function loginEmailValidation(keyupEvent) {
    const inputTextEmail = keyupEvent.target.value
    const inputEmail = keyupEvent.target
    const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    botarNome(inputTextEmail, inputEmail, emailValidation)
}

function loginPassVerification(keyupEvent) {
    const inputTextPass = keyupEvent.target.value
    const inputPass = keyupEvent.target
    const PassValidation = /(?=^.{8,20}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

    botarNome(inputTextPass, inputPass, PassValidation)
}

function inputTextValidation() {
    const formInputElementsList = document.querySelectorAll('.c-input-container__input')
    let contentVerify = []

    formInputElementsList.forEach(function(inputElement) {
        const inputText = inputElement.value
    
        if(inputText == "") {
            contentVerify.push(false)
        }

        if(inputElement.classList.contains('needFocus')) {
            inputElement.focus()
        }
    })

    const hasFalse = contentVerify.includes(false)

    if(hasFalse || validation == false) {
        loginBtn.classList.add('error')

        setTimeout(() => {
            loginBtn.classList.remove('error')
        }, 300)
    }

    else {
        window.location.href = 'https://rafaelottdev.github.io/Projeto-Organizer/work-space.html'
    }
}

loginEmail.addEventListener('keyup', loginEmailValidation)
loginPassword.addEventListener('keyup', loginPassVerification)
loginBtn.addEventListener('click', inputTextValidation)
