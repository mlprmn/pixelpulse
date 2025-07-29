
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('form');
    const trackingButton = document.querySelector('.tracking button');

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for booking! We will contact you shortly.');
    });

    trackingButton.addEventListener('click', function() {
        const input = document.querySelector('.tracking input').value;
        if (input.trim()) {
            alert('Repair ID #' + input + ' is currently being diagnosed.');
        } else {
            alert('Please enter a valid Repair ID.');
        }
    });
});

    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Your message has been sent! We will reply shortly.');
    });
