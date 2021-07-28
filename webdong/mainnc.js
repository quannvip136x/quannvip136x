let Api = 'https://fake-rest-api-nodejs.herokuapp.com/products';
function loadDocJQuery() {
    $.ajax(Api, {
        method: "GET"
    }).done(function (products) {
        console.log(products)

    });
}
$(function () {
    loadDocJQuery();
});