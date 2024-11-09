const textElement = document.getElementById('typing-text');
const phrases = ["Design Gráfico", "Web Designer", "Ilustradora"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.innerText = currentPhrase.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    } else {
        textElement.innerText = currentPhrase.substring(0, charIndex++);
        if (charIndex > currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    }
    setTimeout(type, isDeleting ? 100 : 200);
}

type();

