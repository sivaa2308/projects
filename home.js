// Spotlight Effect
const spotlight = document.getElementById('spotlight');
const spotlightSize = 900;

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    spotlight.style.left = `${x}px`;
    spotlight.style.top = `${y}px`;
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('.index-ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = link.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});



