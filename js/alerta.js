var alertPlaceholder = document.getElementById('alerta')

function alert(message, type) {
   alertPlaceholder.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '</div>'
}