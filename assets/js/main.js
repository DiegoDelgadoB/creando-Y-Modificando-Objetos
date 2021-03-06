// Función Constructura de Consultorio
function Consultorio(nombreConsultorio, pacientes) {
    this.nombreConsultorio = nombreConsultorio
    this.pacientes = pacientes || []
}

//////////////////////////////////////////////////

// Metodo para agregar un nuevo paciente 
Consultorio.prototype.agregarPaciente = function (nuevoPaciente) {
    this.pacientes.push(nuevoPaciente.retrievePaciente())
}

//////////////////////////////////////////////////

// Metodo para mostrar los pacientes como string
Consultorio.prototype.mostrarPacientes = function () {
    console.log(JSON.stringify(this.pacientes))
}

//////////////////////////////////////////////////////////////////////////////////////////////

// Funcion Creadora de Pacientes
function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre
        }
    })
    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre
        }
    })

    /////////////////////////////////////////////
    var _edad = edad

    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return _edad
        }
    })
    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            _edad = edad
        }
    })

    /////////////////////////////////////////////
    var _rut = rut

    Object.defineProperty(this, "_getRut", {
        get: function () {
            return _rut
        }
    })
    Object.defineProperty(this, "_setRut", {
        set: function (rut) {
            _rut = rut
        }
    })

    ///////////////////////////////////////////
    var _diagnostico = diagnostico

    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return _diagnostico
        }
    })
    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            _diagnostico = diagnostico
        }
    })
}

///////////////////////SEETERS Y GETTERS ///////////////////////////

Paciente.prototype.getNombre = function () {
    return this._getNombre
}
Paciente.prototype.setNombre = function (nombre) {
    this._setNombre = nombre
}

//////////////////////////////////////////////////
Paciente.prototype.getEdad = function () {
    return this._getEdad
}
Paciente.prototype.setEdad = function (edad) {
    this._setEdad = edad
}

//////////////////////////////////////////////////
Paciente.prototype.getRut = function () {
    return this._getRut
}
Paciente.prototype.setRut = function (rut) {
    this._setRut = rut
}

//////////////////////////////////////////////////
Paciente.prototype.getDiagnostico = function () {
    return this._getDiagnostico
}
Paciente.prototype.setDiagnostico = function (diagnostico) {
    this._setDiagnostico = diagnostico
}

//////////////////////////////////////////////////

// Metodo para conseguir el nombre de los pacientes y así imprimirlos
Paciente.prototype.retrievePaciente = function () {
    return [this.getNombre(), this.getEdad(), this.getRut(), this.getDiagnostico()]
}

//////////////////////////////////////////////////////////////////////////////////////////////

// LISTA DE PACIENTES
var p1 = new Paciente("Diego", 24, "19.441.178-1", "Hérnias Discales")
var p2 = new Paciente("Pedro", 55, "12.342.278-2", "Psoriasis")
var p3 = new Paciente("Daniela", 15, "13.243.378-3", "Resfrío")
var p4 = new Paciente("Valentina", 92, "14.144.478-4", "SARS-CoV-2")

var c1 = new Consultorio("CESFAM Padre Orellana")

// APLICAR SETTERS

p1.setNombre("José")
// p2.setEdad("24")
// p3.setRut("11.111.111-k")
// p4.setDiagnostico("Influenza")

// AGREGAR PACIENTES A LA LISTA

c1.agregarPaciente(p1)
// c1.agregarPaciente(p2)
// c1.agregarPaciente(p3)
// c1.agregarPaciente(p4)

console.log(c1.mostrarPacientes()) //muestra los pacientes en el consultorio
console.log(c1) //muestra los pacientes en el consultorio