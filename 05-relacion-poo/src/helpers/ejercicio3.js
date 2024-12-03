export function Empleado(nombre,edad, puesto) {
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;
    //Salario lo hago compartido para la clase
    Empleado.prototype.calcularSalario = function(){
        const salarioBase = {
            junior: 1500,
            senior: 2500,
            master: 5000,
        };
        return salarioBase[this.puesto];
};
Empleado.prototype.info = function(){
    console.log
    (`
        Nombre: ${this.nombre},
        Edad: ${this.edad},
        Puesto: ${this.puesto},
        Salario: ${this.calcularSalario()}
    `);
};
};

//subFuncion constructora llamada EmpleadoFreeLance

export function EmpleadoFreeLance(nombre, edad, precioHora) {
    Empleado.call(this, nombre, edad, 'freeLance');
    this.precioHora = precioHora;
   //Tengo que heredar los metodos de la funcion constructora PADRE
   EmpleadoFreeLance.prototype = Object.create(Empleado.prototype);
   //y que el constructor sea el del padre
   EmpleadoFreeLance.prototype.constructor = EmpleadoFreeLance;

   //Sobreescritura de metodo calcularSalario y el info
}