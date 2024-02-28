const signUpPasswordIcon = document.querySelectorAll('.c-eye-icon')
const signUpiconPasswordContainer = document.querySelectorAll('.c-eye-icon-container')

function showPassword(clickEvent) {
    const element = clickEvent.target
    let inputElement
    let iconElement

    if(element.classList.contains('c-eye-icon-container')) {
        inputElement = element.parentNode.children[1]
        iconElement = element.children[0]
    }

    else {
        inputElement = element.parentNode.parentNode.children[1]
        iconElement = element
    }

    inputElement.focus()

    if(iconElement.classList.contains('fa-eye-slash')) {
        iconElement.classList.remove('fa-eye-slash')
        iconElement.classList.add('fa-eye')

        inputElement.type = "text"
    }

    else {
        iconElement.classList.remove('fa-eye')
        iconElement.classList.add('fa-eye-slash')
    
        inputElement.type = "password"
    }
}

signUpiconPasswordContainer.forEach((icon) => {
    icon.addEventListener('click', showPassword)
})
