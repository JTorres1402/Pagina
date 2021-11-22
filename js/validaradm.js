if (localStorage.Rol == 1) {
    var nombre = localStorage.User
    document.getElementById("nombre").innerHTML = "Administrador: "+ nombre;
    
}else if(localStorage.Rol == 2){
    var nombre = localStorage.User
    console.log(nombre)
    document.getElementById("nombre").innerHTML = nombre;
    window.location.href = "../index.html"
    }else{
    window.location.href = "../index.html"
}

function destroy1() {
    window.location.href = "../index.html"
    localStorage.clear();
  }


