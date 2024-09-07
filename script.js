document.addEventListener('DOMContentLoaded', function () {
    var nombre = document.getElementById('nombre');
    var nombreJugador = document.getElementById('nombreJugador');
    var dni = document.getElementById('dni');
    var dniJugador = document.getElementById('dniJugador');
    var canvas = document.getElementById('signature-pad');
    var ctx = canvas.getContext('2d');
    var clearButton = document.getElementById('clear');
    var saveButton = document.getElementById('save');
    var drawing = false;

    function getTouchPos(canvasDom, touchEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };
    }

    canvas.addEventListener('mousedown', function (e) {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    canvas.addEventListener('mousemove', function (e) {
        if (drawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    });

    canvas.addEventListener('mouseup', function () {
        drawing = false;
    });

    canvas.addEventListener('touchstart', function (e) {
        e.preventDefault();
        var touchPos = getTouchPos(canvas, e);
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(touchPos.x, touchPos.y);
    });

    canvas.addEventListener('touchmove', function (e) {
        e.preventDefault();
        if (drawing) {
            var touchPos = getTouchPos(canvas, e);
            ctx.lineTo(touchPos.x, touchPos.y);
            ctx.stroke();
        }
    });

    canvas.addEventListener('touchend', function () {
        drawing = false;
    });

    clearButton.addEventListener('click', function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    saveButton.addEventListener('click', function () {
              window.print();
    });
   
    nombre.addEventListener('change', function(){
        
        var contenido = document.getElementById('nombre').value;
        document.getElementById('np1').textContent = contenido;
    });
    nombreJugador.addEventListener('change', function(){
        var contenido = document.getElementById('nombreJugador').value;
        document.getElementById('nj1').textContent = contenido;
    });
    dni.addEventListener('change', function(){
        
        var contenido = document.getElementById('dni').value;
        document.getElementById('dp1').textContent = contenido;
        
    });
    dniJugador.addEventListener('change', function(){
        var contenido = document.getElementById('dniJugador').value;
        document.getElementById('dj1').textContent = contenido;
    });


    var fechaActual = new Date();

    // Crear un array con los nombres de los meses
    var meses = ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juriol', 'agost', 'septembre', 'octubre', 'novembre', 'decembre'];

    // Obtener el día, mes y año
    var dia = fechaActual.getDate();
    var mes = meses[fechaActual.getMonth()];
    var año = fechaActual.getFullYear();

    // Formatear la fecha en el formato deseado
    var fechaFormateada = dia + ' de ' + mes + ', del ' + año;

    // Insertar la fecha en el span con id "fecha-firma"
    document.getElementById('fecha-firma').textContent = fechaFormateada;


});
