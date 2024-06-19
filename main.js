document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display product images from Google Photos API
    fetch('http://localhost:3000/api/photos')
        .then(response => response.json())
        .then(data => {
            const productImagesDiv = document.getElementById('product-images');
            data.photos.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.url;
                img.alt = photo.description;
                productImagesDiv.appendChild(img);
            });
        });

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value,
        };

        fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            this.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while sending your message.');
        });
    });
});
