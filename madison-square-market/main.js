$(document).ready(() => {
    // Personal: Declare vars for jQuery objects
    $cart = $('#cart');
    $cartMenu = $('#cartMenu');
    $account = $('#account');
    $accountMenu = $('#accountMenu');
    $help = $('#help');
    $helpMenu = $('#helpMenu');
  
    // Add click event handlers for cart, account and help
    $cart.on('click', () => {
      $cartMenu.show();
    });
    $account.on('click', () => {
      $accountMenu.show();
    });
    $help.on('click', () => {
      $helpMenu.show();
    });
  
    // Add mouseleave event handler to each '.dropdown-menu's
    $('.dropdown-menu').on('mouseleave', () => {
      $('.dropdown-menu').hide();
    });
  })