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

    Object, defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre
        }
    })
    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre
        }
    }
})
}
