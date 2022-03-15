// Función constructora de consultorio
function Consultorio(nombreConsultorio, pacientes) {
    this.nombreConsultorio = nombreConsultorio
    this.pacientes = pacientes || []
}

////////////////////////////////////////////////////

// Metodo para agregar un nuevo paciente
Consultorio.prototype.agregarPaciente = function (nuevoPaciente) {
    this.pacientes.push(nuevoPaciente.retrievePaciente())
}

///////////////////////////////////////////////////

//Método para mostrar los pacientes como string
Consultorio.prototype.mostrarPacientes = function () {
    console.log(JSON.stringify(this.pacientes))
}

///////////////////////////////////////////////////

// Función creadora de pacientes
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

    ////////////////////////////////////////////////
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

    ///////////////////////////////////////////////

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

    /////////////////////////////////////////////
    var _diagnostico = diagnostico

    Object.defineProperty(this, "_getDiagnostico", {
        set: function (diagnostico) {
            _diagnostico = rut
        }
    })
}

/////////////// SEETERS Y GETTERS ////////////

Paciente.prototype.getNombre = function () {
    return this._getNombre
}
Paciente.prototype.setNombre = function (nombre) {
    return this._setNombre = nombre
}
//////////////////////////////////////////////
Paciente.prototype.getEdad = function () {
    return this._getEdad
}
Paciente.prototype.setEdad = function (edad) {
    return this._setEdad = edad
}

/////////////////////////////////////////////
Paciente.prototype.getRut = function () {
    return this._getRut
}
Paciente.prototype.setRut = function (rut) {
    this._setRut = rut
}

/////////////////////////////////////////////
Paciente.prototype.getDiagnostico = function () {
    return thiis._getDiagnostico
}
Paciente.prototype.setDiagnostico = function (diagnostico) {
    this._setDiagnostico = diagnostico
}

/////////////////////////////////////////////

// Metodo para conseguir el nombre de los pacientes y así imprimirlos
Paciente.prototype.retrievePaciente = function () {
    return [this.getNombre(), this.getEdad(), this.getRut(), this.getDiagnostico()]
}

/////////////////////////////////////////////

// Lista de pacientes
var p1 = new Paciente("Diego", 25, "19.299.542-6", "Resfrío Comun")
var p2 = new Paciente("Karla", 22, "20.280.020-0", "Dislipidemía")
var p3 = new Paciente("Patricio", 57, "11.973.322-1", "Gota")
var p4 = new Paciente("Ester", 89, "6.483.244.6", "Resfrío")

var c1 = new Consultorio("CESFAM Padre Orellana")

// Aplicar Setters

p1.setNombre("José")
// p2.setEdad("24")
// p3.setRut("11.111.111-k")
// p4.setDiagnostico("Influenza")

// Agregar Pacientes a la Lista
c1.agregarPaciente(p1)
// c1.agregarPaciente(p2)
// c1.agregarPaciente(p3)
// c1.agregarPaciente(p4)

console.log(c1.mostrarPacientes()) // Muestra los pacientes en el consultorio
console.log(c1) // Muestra los pacientes en el consultorio

