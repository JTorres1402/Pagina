function redireccion() {
  window.location.href = "html/login.html";
}

function cancelar() {
  window.location.href = "../"
}

function reserva() {
  if (localStorage.User != null) {
    window.location.href = "../html/formulario.html"
  } else {

  }
}

function contacto() {
  var usuario = document.getElementById("nombre").value
  var correo = document.getElementById("correo").value
  var numerodoc = document.getElementById("numerodoc").value
  var mensaje = document.getElementById("mensaje").value
  var radios = document.getElementsByName('hmn');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      var genero = radios[i].value
    }
  }
  if (usuario != "" | correo != "" | numerodoc != 0 | genero != null | mensaje != "") {
    localStorage.setItem('Contacto', JSON.stringify([usuario, correo, new Number(numerodoc), genero, mensaje]))
    window.location.href = "contacto.html"
  }else{
    alert('Debe ingresar todos los datos')
  }
}

function trabaja() {
  var doc = document.getElementById("doc").value
  if (doc != "") {
    localStorage.setItem('CV', doc)
  }else{
    alert('Debe montar un archivo')
  }
  
}

function formularioreserva() {
  var usuario = document.getElementById("nombre").value
  var correo = document.getElementById("correo").value
  var numerodoc = document.getElementById("numerodoc").value
  var date = document.getElementById("fecha").value

  if (usuario != "" | correo != "" | numerodoc != 0 | date != "") {
    localStorage.setItem('Pedido', JSON.stringify([usuario, correo, new Number(numerodoc), date]))
    message = "Se ha generardo la reserva para el dia " + date
    alert(message)
    window.location.href = history.back()
  } else {
    alert("Debe ingresar todos los datos")
  }
}

function pqrs() {
  var usuario = document.getElementById("nombre").value
  var correo = document.getElementById("correo").value
  var numero = document.getElementById("numero").value
  var date = document.getElementById("fecha").value
  var peticion = document.getElementById("peticion").value
  var radios = document.getElementsByName('hmn');
  var doc = document.getElementById("doc").value
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      var genero = radios[i].value
    }
  }

  if (usuario != "" | correo != "" | numero != 0 | date != "" | genero != null| peticion != "" | doc != "") {
    var radicado = Math.floor((Math.random()*100000)+1)
    localStorage.setItem('PQRS', JSON.stringify([usuario, correo, new Number(numero), date, genero, peticion, radicado, doc]))
    message = "Se ha generado el PQRS con radicado: "+ radicado
    alert(message)
    window.location.href = "ayuda.html"
  }else{
    alert('Debe ingresar todos los datos')
  }

}



function login() {
  var user = document.getElementById("user").value
  var pass = document.getElementById("pass").value

  fetch("../json/user.json")
    .then(function (response) {
      return response.json()
    })

    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        let dato = data[i];
        if (dato.user == user & dato.password == pass) {
          localStorage.setItem('User', user);
          localStorage.setItem('Rol', dato.rol);
          message = "Bienvenido, " + user
          if (dato.rol == 1) {
            window.location.href = "../html/dashboard.html"
            alert(message)
          } else {
            alert(message)
            window.location.href = "../index.html"     
          }
        }
      }
    })

    .catch(function (err) {
      console.log("err")
    })
}