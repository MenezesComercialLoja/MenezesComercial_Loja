document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 4000);
});
fetch("produtos.json")

  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById("produtos-container");

    produtos.forEach(produto => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${produto.img}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <p><strong>${produto.preco}</strong></p>
        <button onclick="comprar('${produto.nome}')">Comprar</button>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Erro ao carregar produtos:", err));

function comprar(produto) {
  const numero = "5583987486260";
  const mensagem = encodeURIComponent(`Olá! Tenho interesse no produto: ${produto}`);
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}
