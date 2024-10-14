document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('Usuario').value;
    const correo = document.getElementById('Correo').value;
    if (usuario && correo) {
        alert('Inicio de sesión exitoso');
    }
});