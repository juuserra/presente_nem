// Função para definir a imagem de fundo
function setBackground(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.body.style.backgroundImage = `url(${e.target.result})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    };

    reader.readAsDataURL(file);
}

// Função para exibir fotos carregadas
function exibirFoto(event) {
    const galeria = document.getElementById('galeriaFotos');
    const img = document.createElement('img');
    img.src = URL.createObjectURL(event.target.files[0]);
    galeria.appendChild(img);
}

// Função para criar corações caindo
function criarCoracoes() {
    const containerCoracoes = document.createElement('div');
    containerCoracoes.className = 'containerCoracoes';
    document.body.appendChild(containerCoracoes);

    for (let i = 0; i < 50; i++) { // Aumentei a quantidade de corações
        const coracao = document.createElement('div');
        coracao.className = 'coracao';
        coracao.style.left = Math.random() * 100 + 'vw';
        coracao.style.animationDelay = Math.random() * 10 + 's';
        containerCoracoes.appendChild(coracao);
    }
}