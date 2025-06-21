document.addEventListener('DOMContentLoaded', () => {
    const viewer = document.getElementById('viewer');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Cambiar modelo al hacer clic en una miniatura
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const modelPath = thumbnail.getAttribute('data-model');

            // Cambiar el modelo actual
            viewer.src = modelPath;

            // Actualizar clase activa
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });

    // Barra de progreso
    const progressBar = document.querySelector('.progress-bar');
    const updateBar = document.querySelector('.update-bar');

    viewer.addEventListener('progress', (event) => {
        const progress = event.detail.loaded / event.detail.total;
        updateBar.style.width = `${progress * 100}%`;
        if (progress === 1) {
            progressBar.classList.add('hide');
        }
    });
});