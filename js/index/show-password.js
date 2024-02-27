const password = document.querySelector('password')
const passwordConfirm = document.querySelector('confirm-password')

const signUpPasswordIcon = document.querySelectorAll('.c-eye-icon')


function showPassword(clickEvent) {
    const elemento = clickEvent.target
    const inputElemento = elemento.parentNode.children[1]

    if(elemento.classList.contains('fa-eye-slash')) {
        elemento.classList.remove('fa-eye-slash')
        elemento.classList.add('fa-eye')

        inputElemento.type = "text"
    }

    else {
        elemento.classList.remove('fa-eye')
        elemento.classList.add('fa-eye-slash')

        inputElemento.type = "password"
    }
}

signUpPasswordIcon.forEach((icon) => {
    icon.addEventListener('click', showPassword)
})
