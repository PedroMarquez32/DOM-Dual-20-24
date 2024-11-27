export function Usuario(nombre,email,password) {
    this.nombre = nombre;
    this.email = email;
    let _password = password;
    //Metodos públicos
    this.login = function(emailIntroducido,passwordIntroducda) {
        //Comprobar el email y la password
        if (this.email === emailIntroducido && _password === passwordIntroducda) {
           return `Bienvenido ${this.nombre}`;
        }
        return 'Error en el email o la contraseña';  
    };

    //Actualizar el email
    this.actualizarEmail = function(nuevoEmail) {
        if (this.email === nuevoEmail) {
            return `El email esta actualizado ${this.email}`;
        }
    };

    //Obtener toda la informacion del Usuario.
    this.getInformacion = function() {
        return `Nombre: ${this.nombre}, Email: ${this.email}, Password: ${_password}`;
    };
};