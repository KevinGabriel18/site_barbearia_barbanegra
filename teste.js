$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
    const sections = $('section');
    const navItems = $('.nav-item');
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }
        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })
    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});



// ------------------------------------------------------------------------



document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('benefitsModal');
    const closeBtn = modal.querySelector('.close');
    const openBtn = document.getElementById('showBenefits');

    // Função para abrir o modal
    openBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que o clique no botão dispare eventos externos
        modal.classList.add('open');
    });

    // Fechar o modal ao clicar no botão de fechar
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    // Fechar o modal ao clicar fora do conteúdo
    window.addEventListener('click', (event) => {
        // Verifica se o clique foi fora do modal e não no botão ou no modal
        if (!modal.contains(event.target) && event.target !== openBtn) {
            modal.classList.remove('open');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const text = "CONFIRA NOSSOS BENEFICIOS PARA MEMBROS";
    let index = 0;

    const typeText = () => {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Ajusta a velocidade de digitação aqui
        }
    };

    // Função que inicia a animação quando o elemento entrar na tela
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando o elemento estiver na tela, começa a digitar
                typeText();
                observer.unobserve(entry.target); // Para de observar o elemento após a animação começar
            }
        });
    }, {
        threshold: 0.5 // Aciona a animação quando 50% do elemento estiver visível na tela
    });

    // Começa a observar o elemento
    observer.observe(textElement);
});

