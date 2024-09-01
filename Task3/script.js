document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        contact: document.getElementById('contact').value,
        gender: document.getElementById('gender').value,
        state: document.getElementById('state').value,
        address: document.getElementById('address').value,
    };

    console.log('Form Data Submitted:', formData);

    alert('Form Submitted Successfully!');
    
    // Here you can add code to store the form data in Firebase Firestore or another database
});
