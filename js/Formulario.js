document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const resetButton = document.getElementById('Resetear');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('El formulario se enviado correctamente');
    });

    resetButton.addEventListener('click', function() {
        form.reset();
    });
});