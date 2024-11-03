function loadIframe(input) {
    const iframe = input.previousElementSibling;
    iframe.src = input.value;
}

function resetLayout() {
    const iframes = document.querySelectorAll('.custom-iframe');
    iframes.forEach(iframe => {
        iframe.parentElement.style.width = '300px';
        iframe.parentElement.style.height = '200px';
    });
}

// Dragging functionality can be added with a library like interact.js for simplicity
