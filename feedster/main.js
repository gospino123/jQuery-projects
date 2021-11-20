$(document).ready(() => {
    // Open/close nav-menu with mouse menu enter and nav-menu leave
    $('.menu').on('mouseenter', () => {
        $('.nav-menu').slideDown('fast');
      });
    $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').slideUp('fast');
    }); 
}); 
