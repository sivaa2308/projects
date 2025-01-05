const spotlight = document.getElementById('spotlight');
const spotlightSize = 900;

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    spotlight.style.left = `${x}px`;
    spotlight.style.top = `${y}px`;
});