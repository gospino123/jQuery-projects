$(document).ready(() => {
  $('#text').on('keyup', event => {
    $('.preview').html($(event.currentTarget).val())
  }); // Duplicate text in preview section

  $('#font').on('change', event => {
    $('.preview').css('font-family', $(event.currentTarget).val());
  }); // Immediately update font-family based on select element
  
  $('#weight').on('change', event => {
    $('.preview').css('font-weight', $(event.currentTarget).val());
  }); // Immediately update font-weight based on select element

  $('#size').on('keyup', event => {
    let fontSize = $(event.currentTarget).val() + 'px';
    $('.preview').css('font-size', fontSize);
  }); // Immediately update font-size based on text input
})