// Mensagem ao carregar a página
window.addEventListener("load", function () {
  alert("Bem-vinda ao seu primeiro site com Docker, Nathália!");
});

// Exibe a data e hora atual no rodapé
const footer = document.querySelector("footer");
const horaAtual = new Date().toLocaleString("pt-BR");
const horaInfo = document.createElement("p");
horaInfo.textContent = `Página carregada em: ${horaAtual}`;
footer.appendChild(horaInfo);

// Interatividade: muda o título ao clicar nele
const titulo = document.querySelector("h1");
titulo.addEventListener("click", function () {
  titulo.textContent = "🎉 Você clicou no título!";
});

