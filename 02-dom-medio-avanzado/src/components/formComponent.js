//Inicio de sesión
export default function formComponent() {
    const divFormLogin = document.createElement('div');
    divFormLogin.classList.add('form-container');
    divFormLogin.id = 'form-container-login';

    //Crear un formulario
    const formEmail = document.createElement('form');
    formEmail.htmlFor = 'form-login';

    //label username
    const labelUsername = document.createElement('label');
    labelUsername.textContent = 'Username:';


    //input username
    const inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.id = 'username';
    inputUsername.name = 'username';
    inputUsername.placeholder = 'Enter your username';
    inputUsername.required = true;


    //label password
    const labelPassword = document.createElement('label');
    labelPassword.textContent = 'Password:';


    //input password
    const inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.id = 'password';
    inputPassword.name = 'password';
    inputPassword.placeholder = 'Enter your password';
    inputPassword.required = true;



    //botón
    const button = document.createElement('button');
    buttonSubmit.id='button-login';
    buttonSubmit.type = 'submit'
    buttonSubmit.textContent = 'Login';


    formEmail.append(labelUsername, inputUsername, inputPassword, labelPassword, button)

    //agregar el formulario al div
    divFormLogin.appendChild(formEmail);
    
    //exportamos el contenedor
    return divFormLogin;
};