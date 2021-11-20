$(document).ready(() => {
    // Open/close nav-menu with mouse menu enter and nav-menu leave
    $('.menu').on('mouseenter', () => {
        $('.nav-menu').slideDown('fast');
      });
    $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').slideUp('fast');
    }); 

    $('.btn').on('mouseenter', event => {
        $(event.currentTarget).addClass('btn-hover');
      }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('btn-hover');
      });
    
    // Start focus at textarea when page loads
    $('.postText').focus();

    // Add character count functionality
    $('.postText').on('keyup', event => {
        let post = $(event.currentTarget).val(); // Sets post equal to 'string' inside of textarea / .postText element
        let remaining = 140 - post.length;
        $('.characters').html(remaining); // Updates number of characters remaining and makes it visible in form after each keystroke
      });
}); 
