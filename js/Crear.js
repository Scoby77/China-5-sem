document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('Usuario').value;
    const correo = document.getElementById('Correo').value;
    const contraseña = document.getElementById('Contraseña').value;
    if (usuario && correo && contraseña) {
        alert('Registro exitoso');
    }
});