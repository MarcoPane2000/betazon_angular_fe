// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.clickable-card');
//     cards.forEach(card => {
//         card.addEventListener('click', function() {
//             const url = this.getAttribute('data-url');
//             if (url) {
//                 window.location.href = url;
//             }
//         });
//     });
// });



// questo è presente anche nel file html (non mi prendeva il collegamento ma lo copiato qui cosi ce anche nel js)
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.clickable-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });

    const productsContainer = document.getElementById("products-container");
    const products = productsContainer.getElementsByClassName("product");
    const minProducts = 3;
    const emptyProductsToAdd = 5;

    if (products.length < minProducts) {
        for (let i = 0; i < emptyProductsToAdd; i++) {
            const emptyProduct = document.createElement("div");
            emptyProduct.className = "col-md-4 empty-product";
            emptyProduct.innerHTML = `
                <div class="card-body">
                    <img src="../img/laptop.png" class="card-img-top mx-auto" alt="Empty Product" style="opacity: 0;">
                </div>
            `;
            productsContainer.appendChild(emptyProduct);
        }
    }
});
