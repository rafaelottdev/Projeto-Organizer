const signUpEmail = document.querySelector('#email')
const signUpPasswordList = document.querySelectorAll('.password')
const signUpBtn = document.querySelector('.sign-up-button')

let validation = true

function inputValidation(text, regex, element) {
   const passwordId = element.id
   const password = document.querySelector('#password')

   if(regex.test(text)) {
      element.style.borderBottomColor = "green"
      validation = true
      element.classList.remove('needFocus')

      if(passwordId == "confirm-password") {
         if(password.value == text) {
            element.style.borderBottomColor = "green"
         }

         else {
            element.style.borderBottomColor = "#F25E5A"
            
         }
         console.log(password, text)
      }
   }
   
   else {
      element.style.borderBottomColor = "#F25E5A"
      validation = false
      element.classList.add('needFocus')
   }

   
}

function emailValidation(keyupEvent) {
   const inputTextEmail = keyupEvent.target.value

   const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
   
   inputValidation(inputTextEmail, emailValidation, signUpEmail)
}

function passwordValidation(keyupEvent) {
   const inputElement = keyupEvent.target
   const inputTextPass = keyupEvent.target.value

   const passwordValidation = /(?=^.{8,20}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

   inputValidation(inputTextPass, passwordValidation, inputElement)
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
      signUpBtn.classList.add('error')

      setTimeout(() => {
         signUpBtn.classList.remove('error')
      }, 300)
   }

   else {
      window.location.href = 'https://rafaelottdev.github.io/Projeto-Organizer/work-space.html'
   }
}

signUpEmail.addEventListener("keyup", emailValidation)

signUpPasswordList.forEach(function(signUpPassword) {
   signUpPassword.addEventListener("keyup", passwordValidation)
})

signUpBtn.addEventListener('click', inputTextValidation)

// a confirmação não precisa ter a validação completa, basta fazer a validação pra ver se é igual a senha, vai da na mesma e vai ficar mais facil - tirar a confirmação da validação de regex (criar um beckup pra caso n funcione)
// fazer so um array percorrendo todos os input e fazendo as verificações
