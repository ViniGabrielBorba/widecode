// Botão WhatsApp
const btn = document.getElementById('contatoBtn');
btn.addEventListener('click', () => {
  const whatsappMessage = "Olá, quero saber mais sobre a WideCodeBR e seus serviços!";
  const whatsappURL = `https://wa.me/5581994201799?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappURL, '_blank');
});

// Fundo animado: cria 50 partículas
const bg = document.getElementById('bg');
for(let i = 0; i < 50; i++){
  const span = document.createElement('span');
  span.style.left = Math.random() * 100 + 'vw';
  span.style.top = Math.random() * 100 + 'vh';
  span.style.width = span.style.height = Math.random() * 20 + 10 + 'px';
  span.style.animationDuration = 10 + Math.random() * 20 + 's';
  span.style.background = `rgba(255,255,255,${Math.random()*0.3 + 0.1})`;
  bg.appendChild(span);
}
