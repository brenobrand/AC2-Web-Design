// js/produtos.js

document.addEventListener('DOMContentLoaded', () => {

    const filterButtons = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');
            
            // Pega a categoria do botão clicado
            const category = button.dataset.category;

            // Itera sobre todos os cards de produtos
            productCards.forEach(card => {
                const cardCategories = card.dataset.category;
                
                // Se a categoria for 'todos' ou o card tiver a categoria correspondente, mostra o card
                if (category === 'todos' || cardCategories.includes(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});