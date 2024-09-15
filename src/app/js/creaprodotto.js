// gestione del modale per categoria   -----   anteprima immagine   -----    validazione form


document.getElementById('category').addEventListener('change', function() {
    var modal = new bootstrap.Modal(document.getElementById('categoryModal'));
    modal.show();
});



document.getElementById('photo').addEventListener('change', function(event) {
    var photoPreviewContainer = document.getElementById('photoPreviewContainer');
    photoPreviewContainer.innerHTML = ''; // Clear previous previews

    Array.from(event.target.files).forEach(function(file) {
        var reader = new FileReader();
        reader.onload = function() {
            var img = document.createElement('img');
            img.src = reader.result;
            photoPreviewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});




document.getElementById('adminForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var isValid = true;
    var fields = document.querySelectorAll('.field-container input, .field-container select, .field-container textarea');
    
    fields.forEach(function(field) {
        var container = field.closest('.field-container');
        if (!field.value) {
            container.classList.add('error');
            isValid = false;
        } else {
            container.classList.remove('error');
        }
    });

    if (isValid) {
        // Submit the form or perform the desired action
        alert('Form submitted successfully!');
    }
});