document.querySelector('#btnregistrar').addEventListener('click', registrar);

mostraRegistros();

function registrar() {
    var nuevaReserva = [],
        nombre = '',
        correo = '',
        numero = '',
        libro ='',
        fecha = '';
    
    nombre = document.querySelector('#nom').value
    numero = document.querySelector('#numerodoc').value
    correo = document.querySelector('#correo').value
    libro = document.querySelector('#libro').value
    fecha = document.querySelector('#fecha').value
    var radicado = Math.floor((Math.random() * 100000) + 1);

    nuevaReserva.push(radicado, nombre, numero, correo, libro, fecha);
    registrarReserva(nuevaReserva);
    mostraRegistros();
    limpiar()
}

function mostraRegistros() {
    var reservas = getRegistro(),
        tbody = document.querySelector('#tblreserva tbody');
    tbody.innerHTML = ''
    for(var i = 0; i < reservas.length; i++){
        var fila = document.createElement('tr'),
            celdanumr = document.createElement('td'),
            celdanom = document.createElement('td'),
            celdadoc = document.createElement('td'),
            celdaemail = document.createElement('td'),
            celdalibro = document.createElement('td'),
            celdadate = document.createElement('td');

        var botonActualizar = document.createElement('input')
        botonActualizar.type = 'button'

       // fila.id = listaReserva[i][2]

        celdanumr.innerHTML = reservas[i][0];
        celdanom.innerHTML = reservas[i][1];
        celdadoc.innerHTML = reservas[i][2];
        celdaemail.innerHTML = reservas[i][3];
        celdalibro.innerHTML = reservas[i][4];
        celdadate.innerHTML = reservas[i][5];
        
        
        fila.appendChild(celdanumr);
        fila.appendChild(celdanom);
        fila.appendChild(celdadoc);
        fila.appendChild(celdaemail);
        fila.appendChild(celdalibro);
        fila.appendChild(celdadate);
        

        tbody.appendChild(fila);
    } 
}

    /*    function mostrarDatosParaActualizar() {
            var documento = this.radicado
            var apersona = BusacarRegistroPorDocumento(documento)
            var aReserva = b
            var aNombre = aReserva[1]
            var aDocumento = aReserva[2]
            var aCorreo = aReserva[3]
            var aFecha = aReserva[4]

            document.querySelector('#nom').value = aNombre
            document.querySelector('#numerodoc').value = aDocumento 
            document.querySelector('#numerodoc').disabled = true
            document.querySelector('#correo').value = aCorreo
            document.querySelector('#fecha').value = aFecha

        }

        
function actualizar() {

    var sNombre = document.querySelector('#nom').value
        sDocumento = document.querySelector('#numerodoc').value 
        sCorreo = document.querySelector('#correo').value
        sFecha = document.querySelector('#fecha').value
        aReservaModificada = []
    aReservaModificada.push(sNombre, sDocumento, sCorreo, sFecha)
    actualizarReserva(aReservaModificada)
    mostraRegistros()
}
*/

function limpiar() {
    document.querySelector('#nom').value = ''
    document.querySelector('#numerodoc').value = '' 
    document.querySelector('#correo').value = ''
    document.querySelector('#fecha').value = ''
}