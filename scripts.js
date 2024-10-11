const draggables = document.querySelectorAll('.draggable');
const dropzone = document.getElementById('zonaDestino');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

// Añadir eventos de arrastrar y soltar
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

dropzone.addEventListener('dragover', e => {
    e.preventDefault();
});

dropzone.addEventListener('drop', e => {
    e.preventDefault();
    const dragging = document.querySelector('.dragging');
    dropzone.appendChild(dragging);
    checkOrder();
});

function checkOrder() {
    const items = Array.from(dropzone.children);
    const correctOrder = items.every((item, index) => item.dataset.order == index + 1);

    // Mostrar el mensaje adecuado y cambiar el color
    if (items.length === 3) {
        if (correctOrder) {
            items.forEach(item => item.style.backgroundColor = '#d1c4b2'); // Verde claro
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
        } else {
            items.forEach(item => item.style.backgroundColor = '#f3c9b9'); // Naranja claro
            successMessage.style.display = 'none';
            errorMessage.style.display = 'block';
        }
    }
}

function startExercise(type) {
    if (type === 'parrafos') {
        window.location.href = 'parrafos.html'; // Asegúrate de que 'ejercicio.html' sea el nombre correcto del archivo de ejercicios
    } else if (type === 'redaccion') {
		window.location.href = 'Recapitulativo_errores.html'; // Asegúrate de que 'ejercicio.html' sea el nombre correcto del archivo de ejercicios
        // Agrega lógica para otros ejercicios si es necesario
    } else if (type === 'ortografia') {
        // Agrega lógica para otros ejercicios si es necesario
    } else if (type === 'conectores') {
        // Agrega lógica para otros ejercicios si es necesario
    }
}
