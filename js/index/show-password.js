const signUpPasswordIcon = document.querySelectorAll('.c-eye-icon')

function showPassword(clickEvent) {
    const element = clickEvent.target
    const inputElement = element.parentNode.children[1]
    inputElement.focus()

    if(element.classList.contains('fa-eye-slash')) {
        element.classList.remove('fa-eye-slash')
        element.classList.add('fa-eye')

        inputElement.type = "text"
    }

    else {
        element.classList.remove('fa-eye')
        element.classList.add('fa-eye-slash')

        inputElement.type = "password"
    }
}

signUpPasswordIcon.forEach((icon) => {
    icon.addEventListener('click', showPassword)
})

// a confirmação não precisa ter a validação completa, basta fazer a validação pra ver se é igual a senha, vai da na mesma e vai ficar mais facil - tirar a confirmação da validação de regex (criar um beckup pra caso n funcione)
// fazer so um array percorrendo todos os input e fazendo as verificações
// e se eu apagar o password e ficar igual?
