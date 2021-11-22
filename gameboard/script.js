var main = function() {
    $('.more-btn').on('click', event => {
        $(event.currentTarget).siblings('.more-menu').toggle();
    }); // Toggle more-menu individually for each card

    $('.share').on('click', event => {
        $(event.currentTarget).siblings('.share-menu').toggle();
    }); // Toggle sub-menu share-menu individually for each card

    $('.bell').on('click', event => {
        $(event.currentTarget).find('.notification').toggleClass('active');
    });    
};

$(document).ready(main);