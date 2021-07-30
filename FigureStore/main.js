function show() {
    $(".cart-items").addClass('show');
    $(".container").addClass('opacity');
}

function hide() {
    $(".cart-items").removeClass('show');
    $(".container").removeClass('opacity');
}
function ShowMenu() {
    $(".menu-ipad").toggle('show');
}
function success() {
    alert('Cảm ơn quý khách đã mua hàng');
    console.log('aaa')
    
}