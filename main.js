// main.js

const textElement = document.getElementById('typing-text');
const phrases = ["Design Gráfico", "Web Designer", "Ilustradora"]; 
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.innerHTML = currentPhrase.substring(0, charIndex--);
    } else {
        textElement.innerHTML = currentPhrase.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pausa ao final da frase antes de deletar
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        // Avança para a próxima frase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 150);
    }
}

// Inicia a animação de digitação
type();
