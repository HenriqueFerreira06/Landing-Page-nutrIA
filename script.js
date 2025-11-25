document.addEventListener("DOMContentLoaded", () => {
  // Mostra o botão quando o usuário rola pra baixo
  window.onscroll = function() {
    const btn = document.getElementById("btnTopo");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Faz a rolagem suave até o topo
  document.getElementById("btnTopo").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // ==== ANIMAÇÃO AO ROLAR ==== //
  const elementos = document.querySelectorAll('.scroll-animation');

  function aparecerNoScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    elementos.forEach(el => {
      const topoElemento = el.getBoundingClientRect().top;
      if (topoElemento < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', aparecerNoScroll);
  aparecerNoScroll(); // pra iniciar já visível
});
