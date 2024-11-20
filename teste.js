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
    const closeBtn = document.querySelector('.close');
    
    // Função para abrir o modal
    function openModal() {
        modal.classList.add('open');
    }

    // Fechar o modal ao clicar fora do conteúdo
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.classList.remove('open');
        }
    };

    // Função para observar a visibilidade do modal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                modal.classList.remove('open');  // Fecha o modal quando ele sair da tela
            }
        });
    }, {
        threshold: 0.1  // Define que o modal deve sair 10% da tela para ser considerado fora de vista
    });

    // Começa a observar o modal
    observer.observe(modal);

    // Exemplo de ativação do modal (adicione ao botão que desejar)
    document.getElementById('showBenefits').addEventListener('click', openModal);
});
