var alertPlaceholder = document.getElementById('alerta')

function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '</div>'
    alertPlaceholder.append(wrapper)
}