/* Rolagem suave para links âncora */
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function (evento) {
        evento.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            alvo.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* Adicionar animação às cartas de habilidades ao rolar a página */
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = '1';
            entrada.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.skill-card').forEach(cartao => {
    cartao.style.opacity = '0';
    cartao.style.transform = 'translateY(20px)';
    cartao.style.transition = 'all 0.5s ease-out';
    observador.observe(cartao);
});

/* Animação do botão de contato */
const botaoContato = document.querySelector('.cta-button');
if (botaoContato) {
    botaoContato.addEventListener('mouseover', () => {
        botaoContato.style.transform = 'scale(1.05)';
    });
    
    botaoContato.addEventListener('mouseout', () => {
        botaoContato.style.transform = 'scale(1)';
    });
}
