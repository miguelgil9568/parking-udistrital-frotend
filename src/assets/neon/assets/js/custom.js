$(document).ready(function () {

    console.log('Hellow Virgin Mobile');


    // Sample Toastr Notification
    setTimeout(function () {
        var opts = {
            "closeButton": true,
            "debug": false,
            "positionClass": rtl() || public_vars.$pageContainer.hasClass('right-sidebar') ? "toast-top-left" : "toast-top-right",
            "toastClass": "black",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };

        toastr.success("You have been awarded with 1 year free subscription. Enjoy it!", "Account Subcription Updated", opts);
    }, 1000);


});

function miAlerta(mensaje) {
    console.log('El Mensaje:  ' + mensaje);
}

