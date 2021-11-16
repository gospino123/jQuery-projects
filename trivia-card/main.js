$(document).ready(() =>{
    // Hide smiley and show frown to replace Codecademy multiple use code
    $noSmile = () => {
        $('.smiley').hide();
        $('.frown').show();
    };

    $('.hint-box').on('click', () => {
        $('.hint').slideToggle('fast');
    });

    $('.wrong-answer-one').on('click', () => {
        $('.wrong-text-one').fadeOut('fast');
        $noSmile();
    });

    $('.wrong-answer-two').on('click', () => {
        $('.wrong-text-two').fadeOut('fast');
        $noSmile();
    });
    
    $('.wrong-answer-three').on('click', () => {
        $('.wrong-text-three').fadeOut('fast');
        $noSmile();
    });

    $('.correct-answer').on('click', () => {
        $('.frown').hide();
        $('.wrong-text-one').fadeOut('fast');
        $('.wrong-text-two').fadeOut('fast');
        $('.wrong-text-three').fadeOut('fast');
        $('.smiley').show();
    });

    // Add reset button as suggested
    $('.reset-box').on('click', () => {
        $('.smiley').hide();
        $('.frown').hide();
        $('.wrong-text-one').fadeIn('fast');
        $('.wrong-text-two').fadeIn('fast');
        $('.wrong-text-three').fadeIn('fast');
        $('.hint').slideUp('fast');
    });
});