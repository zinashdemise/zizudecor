const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get customer information
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    // Check for empty fields
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Show confirmation
    alert(
        "Thank you, " + name +
        "! Your message has been submitted."
    );

    // Clear the form
    contactForm.reset();
});
