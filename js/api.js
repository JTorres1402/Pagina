function getAllRequest(){
  categoria = document.getElementById("categoria").value
  if (categoria != "Seleccione la categoria") {
    document.getElementById("catego").innerHTML = "Categoria: "+categoria
  }
  
  fetch('https://www.etnassoft.com/api/v1/get/?category='+ categoria)
    .then(function (response){
      return response.json()
    })

    .then(function (data){ 
      datos = document.querySelectorAll("#tblbusqueda tr")
        if (datos.length > 0) {
          datos.forEach(e => e.remove());
        }
      for (let i = 0; i < data.length; i++) {
        dato = data[i]
        var titulo = dato.title
        var autor = dato.author
        var fila="<tr><td>"+titulo+"</td><td>"+autor+"</td></tr>";
        var btn = document.createElement("TR");
   	    btn.innerHTML=fila;
        document.getElementById("tblbusqueda").appendChild(btn);
        }
        
    })
    
    .catch(function (error) {
    console.log(error);
    }); 
}
