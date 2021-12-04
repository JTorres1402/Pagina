var listaReserva = [
    [2134,'Jose','Torres','1234667','jose@gmail.com', 'Fuimos canciones','2021-11-23']
]

function registrarReserva(nuevoResistro) {
    listaReserva = getRegistro()
    listaReserva.push(nuevoResistro)
    localStorage.setItem('Reservas',JSON.stringify(listaReserva))
}

function getRegistro() {
    var lista = []
    if(localStorage.getItem('Reservas') == null){
        lista = listaReserva
    }else{
        lista = JSON.parse(localStorage.getItem('Reservas'))
    }
    return lista;
}

function BusacarRegistroPorDocumento(pDocumento) {
    var listaReserva = getRegistro()
    var aReserva = []

    for(var i = 0; i < listaReserva.length; i++){
        if (pDocumento == listaReserva [i][2]) {
            aReserva = listaReserva[i]
        }
    }
    return aReserva
}
