const fields = document.querySelectorAll("[required]")


function ValidateField(field) {

    function verifyErrors() {
        let foundError = false;
        for (let error in field.validity) {

            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            name: {
                valueMissing: "Por favor, preencha este campo",
                patternMismatch: "Campo deve conter 3 caracteres ou mais"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            },
            cpf: {
                valueMissing: "CPF é obrigatório",
                patternMismatch: "Por favor, preencha um CPF válido"
            },
            tel: {
                valueMissing: "Telefone é obrigatório",
                patternMismatch: "Por favor, preencha um telefone válido"
            }
        }

        return messages[field.id][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")

        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()

        if (error) {
            const message = customMessage(error)
            field.parentNode.querySelector("label").classList.add('error-label');
            field.parentNode.querySelector(".barra").classList.add('error-barra');
            setCustomMessage(message)
        } else {
            field.parentNode.querySelector("label").classList.remove('error-label');
            field.parentNode.querySelector(".barra").classList.remove('error-barra');
            setCustomMessage()
        }
    }
}


function customValidation(event) {
    const field = event.target
    const validation = ValidateField(field)

    validation()

}

for (field of fields) {
    field.addEventListener("invalid", event => {
        // eliminar o bubble
        event.preventDefault()

        customValidation(event)
    })
    field.addEventListener("blur", customValidation)

}


document.querySelector("form")
    .addEventListener("submit", event => {
        event.preventDefault()
        let button = document.querySelector('button');
        button.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>'
        setTimeout(() => {
            setLocalStorage(event.target)
            location.href = 'list-user.html';
        }, 1500)
    })

function setLocalStorage(e) {

    const users = [];
    const user = {
        name: e.name.value,
        email: e.email.value,
        cpf: e.cpf.value.replace(/\D/g, ""),
        phone: e.tel.value.replace(/\D/g, "")
    };
    if (localStorage.getItem('user')) {
        const userLocal = localStorage.getItem('user')
        users.push(...JSON.parse(userLocal));
    }
    users.push(user)
    return localStorage.setItem('user', JSON.stringify(users))

}