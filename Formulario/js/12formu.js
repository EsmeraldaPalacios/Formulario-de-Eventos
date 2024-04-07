document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var tipoEntrada = document.getElementById('T-E').value;

    if (nombre === '' || correo === '' || telefono === '' || tipoEntrada === '') {
        document.getElementById('Resultados').innerText = 'Por favor, completa todos los campos.';
    } else {
        document.getElementById('event-details').innerHTML = `
            <div class="event-detail">
                <h2>Felicidades ${nombre}, tu registro fue exitoso</h2>
                <p>Se ha enviado un correo de confirmación a ${correo}.</p>
                <p>¡Bienvenido al mundo mágico de la programación, donde todo es posible!</p>
                <img src="imagen/OIP.jpeg" widith="200px" height="300px">
            </div>
        `;
        document.getElementById('event-details').style.display = 'flex'; /* Muestra el contenedor de detalles del evento */
        alert('Registro Exitoso');
    }
});
