
document.addEventListener('DOMContentLoaded', function() {
    const miniCart = document.getElementById('miniCart');

    // Esempio di prodotti nel carrello
    const products = [
        { name: 'Prodotto 1', price: '€10', img: '../img/computer.png', quantity: 1 },
        { name: 'Prodotto 2', price: '€20', img: '../img/laptop.png', quantity: 2 },
        { name: 'Prodotto 3', price: '€30', img: '../img/mouse.png', quantity: 1 },
        { name: 'Prodotto 3', price: '€30', img: '../img/telefono.png', quantity: 1 }

    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <span>${product.name}</span>
            <span>${product.price}</span>
            <span>Qty: ${product.quantity}</span>
            <span class="remove">Rimuovi</span> <!-- Aggiunge il tasto "x" per rimuovere il prodotto -->
        `;
        miniCart.appendChild(productDiv);
    });

    // Aggiunge l'evento per rimuovere il prodotto
    miniCart.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove')) {
            event.target.parentElement.remove();
        }
    });
});
