const divForm = () => { 
    const divForm = document.createElement('div');
    divForm.classList.add('form-container');
    const formEmail = document.createElement('form');
    formEmail.classList.add('form');

    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Correo electrónico: ';

    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email');
    inputEmail.id = 'email';
    inputEmail.setAttribute('placeholder', 'Escriba tu email');
    inputEmail.required
    divForm.appendChild(formEmail);

    app.appendChild(divForm);

    const pEmailCheck = document.createElement('p');
    pEmailCheck.id = 'email-check';
    pEmailCheck.textContent = 'Escriba no valido';
    pEmailCheck.style.color = 'red';
    pEmailCheck.style.display = 'none';
    divForm.appendChild(pEmailCheck);

    //logica de validacion de email
    // necesito una expresion regular de validacion del email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
    inputEmail.addEventListener ("input", () => {
        //si el email es valido
        const isValidEmail = emailRegex.test(inputEmail.value);
        pEmailCheck.style.display = isValidEmail ? "none" : "block";
    });

    return divForm;
};

export default divForm;

