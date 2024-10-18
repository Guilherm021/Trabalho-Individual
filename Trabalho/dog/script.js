const dogImage = document.getElementById('dogImage');

// Função para mudar a imagem
function changeImage(isHappy) {
    if (isHappy) {
        dogImage.src = 'https://blog.meupetclub.com.br/wp-content/uploads/2023/08/cachorrinho-feliz-sorrindo-em-fundo-roxo-isolado-scaled.jpg'; 
    } else {
        dogImage.src = 'https://fresh4pet.com.br/wp-content/uploads/2023/02/foto-blog-10-fevereiro-1024x672.jpg'; 
    }
}

// Evento mouseover
dogImage.addEventListener('mouseover', () => changeImage(true));

// Evento mouseout
dogImage.addEventListener('mouseout', () => changeImage(false));
