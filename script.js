function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.display = (navLinks.style.display === "block") ? "none" : "block";
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Log form data to the console (you can remove this in a production environment)
    console.log(formObject);

    // Display thank you message
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
    thankYouMessage.style.color = 'green';

    // Clear the form
    event.target.reset();

    // Remove any existing thank you message
    const existingThankYouMessage = document.getElementById('thankYouMessage');
    if (existingThankYouMessage) {
        existingThankYouMessage.remove();
    }

    // Append the thank you message to the form section
    thankYouMessage.id = 'thankYouMessage';
    const formSection = document.getElementById('contact');
    formSection.appendChild(thankYouMessage);
});
