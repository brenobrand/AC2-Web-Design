// js/main.js

// O JavaScript para a página inicial pode ser colocado aqui.
// Por exemplo, você pode adicionar animações simples no carregamento da página.

document.addEventListener('DOMContentLoaded', () => {
    // Exemplo: animação de fade-in para as seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 300);
    });
});
