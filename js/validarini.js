if (localStorage.User == null) {
    var div1 = document.getElementById('b1')
    var div2 = document.getElementById('b2')
    div1.style.display = ''
    div2.style.display = 'none'
}else{
    var div1 = document.getElementById('b1')
    var div2 = document.getElementById('b2')
    div1.style.display = 'none'
    div2.style.display = ''
}

function destroy() {
    window.location.href = "index.html"
    localStorage.clear();
}