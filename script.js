
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.fa-bars');
    const navbar = document.querySelector('.navbar ul');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('fa-times'); // Change hamburger to 'X' icon
        navbar.classList.toggle('nav-toggle'); // Toggle visibility of the navbar
    });

    window.addEventListener('scroll', function () {
        // Close the menu on scroll
        menuIcon.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');

        // Add shadow effect to header on scroll
        if (window.scrollY > 30) {
            document.querySelector('header').classList.add('header-active');
        } else {
            document.querySelector('header').classList.remove('header-active');
        }
    });
});
