const form = document.querySelector(".form-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    
    setTimeout(() => {
        form.style.transform = "translateX(0)"
    }, 1000);
    
    mascara.style.visibility = "hidden"
}


document.querySelector(".form-fale-conosco").addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Pega os valores do formulário
    const nome = document.getElementById('nome').value;
    const duvida = document.getElementById('duvida').value;
    
    // Monta a mensagem
    const texto = `Olá, meu nome é ${nome}. Dúvida: ${duvida}`;
    
    // Número do WhatsApp com DDI e DDD, sem traços ou parênteses
    const numero = "5541987782576"; // exemplo com DDI do Brasil
    
    // Cria a URL com encode
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    
    // Abre o link no WhatsApp
    window.open(url, '_blank');
});




function pullNavbar() {
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu-links");

  menu.classList.toggle("active");
  btn.classList.toggle("active");
}

// Clique fora do menu fecha ele
document.addEventListener("click", function (e) {
  const menu = document.querySelector(".menu-links");
  const btn = document.querySelector(".menu-btn");

  if (
    menu.classList.contains("active") &&
    !menu.contains(e.target) &&
    !btn.contains(e.target)
  ) {
    menu.classList.remove("active");
    btn.classList.remove("active");
  }
});