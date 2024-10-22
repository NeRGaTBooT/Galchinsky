$(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('.btn_top').fadeIn();
        } else {
            $('.btn_top').fadeOut();
        }
    });


    $('.btn_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });


    $("#menu, #myNav").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });


});

const burger = document.getElementById('burger');
const navMain = document.querySelector('.menu');
const burgerIcon = document.getElementById('burger-icon');
const menuItems = document.querySelectorAll('.menu a');

// Переключение меню при нажатии на значок бургера
burger.addEventListener('click', () => {
    if (navMain.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Закрытие меню и прокрутка к якорю при нажатии на пункт меню (только на мобильных устройствах)
menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) {
            event.preventDefault(); // Предотвращение стандартного поведения анкора
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            closeMenu();

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

function openMenu() {
    navMain.style.display = 'flex';
    setTimeout(() => {
        navMain.classList.add('active');
    }, 10);
    burgerIcon.src = 'img/x.svg';
}

function closeMenu() {
    navMain.classList.remove('active');
    setTimeout(() => {
        navMain.style.display = 'none';
    }, 300);
    burgerIcon.src = 'img/menu.svg';
}