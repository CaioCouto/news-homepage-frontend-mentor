function setCloseButtonDivHeight() {
    const header = document.querySelector('.header');
    const menuBtnDiv = document.querySelector('.header-menu-closeBtn');
    menuBtnDiv.style.height = header.clientHeight+'px';
}

function toggleMenu() {
    document
        .querySelector('.header-menu')
        .classList
        .toggle('active');
}

const menuBtn = document.querySelectorAll('.header-menu-btn');
menuBtn.forEach(btn => btn.addEventListener('click', toggleMenu));

onload = () => {
    const header = document.querySelector('.header');
    const menuBtnDiv = document.querySelector('.header-menu-closeBtn');
    menuBtnDiv.style.height = header.clientHeight+'px';
}
