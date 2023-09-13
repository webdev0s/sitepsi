document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById('dropdown');
  const menu = document.getElementById('menu');
  let isOpen = false;
  let animationFrameId = null;
  let paddingPercentage = 0; // Inicializa o padding em 0%

  dropdownButton.addEventListener("click", function () {
    if (!isOpen) {
      expandDropdown();
    } else {
      collapseDropdown();
    }
  });

  // Adicione um evento de clique aos itens do menu
  const menuItems = menu.querySelectorAll('li');
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      collapseDropdown();
    });
  });

  function expandDropdown() {
    isOpen = true; // Atualiza o estado do menu para aberto
    menu.style.height = "auto"; // Defina inicialmente para "auto" para obter a altura total
    menu.classList.remove("hidden");

    const targetHeight = menu.scrollHeight;
    menu.style.height = "0"; // Redefina a altura para "0" para animação

    const duration = 350; // 0.35 segundos
    const paddingIncrement = 5; // 5% (valor fixo)
    let currentPadding = 0; // Inicializa o padding atual

    const startTime = performance.now();

    function animate(time) {
      const elapsedTime = time - startTime;
      const currentHeight = (elapsedTime / duration) * targetHeight;

      // Calcula o valor atual do padding com base no progresso da animação
      paddingPercentage = (elapsedTime / duration) * paddingIncrement;

      menu.style.height = currentHeight + "px";
      menu.style.paddingTop = paddingPercentage + "%"; // Define o padding em porcentagem
      menu.style.overflowY = "hidden"; // Oculta o overflow

      if (currentHeight < targetHeight) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        menu.style.height = "auto"; // Redefina a altura para "auto" quando a animação estiver completa
        menu.style.overflowY = "visible"; // Mostra o overflow para exibir o conteúdo restante
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  function collapseDropdown() {
    isOpen = false; // Atualiza o estado do menu para fechado

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    menu.style.overflowY = "hidden"; // Oculta o overflow
    menu.style.height = menu.scrollHeight + "px"; // Define a altura para a altura atual
    menu.style.paddingTop = "5%"; // Define o padding inicial para 5%

    const targetHeight = 0;
    const duration = 500; // 0.5 segundos
    const paddingDecrement = 5; // 5% (valor fixo)
    let currentPadding = 5; // Inicializa o padding atual como 5% (valor máximo)

    const startTime = performance.now();
    const currentHeight = menu.offsetHeight;

    function animate(time) {
      const elapsedTime = time - startTime;
      const newHeight = currentHeight - (elapsedTime / duration) * currentHeight;

      // Calcula o valor atual do padding com base no progresso da animação
      paddingPercentage = 5 - (elapsedTime / duration) * paddingDecrement;

      menu.style.height = newHeight + "px";
      menu.style.paddingTop = paddingPercentage + "%"; // Define o padding em porcentagem

      if (newHeight > targetHeight) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        menu.style.overflowY = "hidden"; // Mantém o overflow oculto quando totalmente fechado
        menu.style.height = "0px"; // Redefina a altura para "0px" quando a animação estiver completa
        menu.classList.add("hidden");
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".scroll-js a"); // Seleciona todos os links dentro das listas de navegação

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});


$('.slider-testimonial').slick({
  dots: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
});

const accordionList = document.querySelectorAll('.js-accordion dt')

function activeAccordion(event) {
  const element = this.nextElementSibling;
  element.classList.remove('hidden')
  if (!element.classList.contains('ativo')) {
    // If 'ativo' is not present, remove 'inativo' and add 'ativo'
    element.classList.remove('inativo');
    element.classList.add('ativo');
  } else {
    // If 'ativo' is present, remove it and add 'inativo'
    element.classList.remove('ativo');
    element.classList.add('inativo');
  }
}

accordionList.forEach((item) => {
  item.addEventListener('click', activeAccordion);
});

accordionList.forEach((item) => {
  item.addEventListener('click', function (){
  item.classList.toggle('cor-ativo');
});
});
