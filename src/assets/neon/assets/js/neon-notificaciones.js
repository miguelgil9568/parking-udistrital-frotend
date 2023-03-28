
var neonNotifications = (function () {
	return {
		notificacionRegular: function (titulo, mensaje, tipo) {
			var opts = {
				"closeButton": true,
				"debug": false,
				"onclick": null,
				"showDuration": "600",
				"hideDuration": "1000",
				"timeOut": "9000",
				"extendedTimeOut": "1000",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut"
			};
			if (tipo == 'success') {
				toastr.success(mensaje, titulo, opts);
			}
			if (tipo == 'info') {
				toastr.info(mensaje, titulo, opts);
			}
			if (tipo == 'error') {
				toastr.error(mensaje, titulo, opts);
			}
			if (tipo == 'warning') {
				toastr.warning(mensaje, titulo, opts);
			}
		},

		notificacionRegularOscura: function (titulo, mensaje, tipo) {

			var opts = {
				"closeButton": true,
				"debug": false,
				"onclick": null,
				"positionClass": rtl() || public_vars.$pageContainer.hasClass('right-sidebar') ? "toast-top-left" : "toast-top-right",
				"toastClass": "black",
				"showDuration": "600",
				"hideDuration": "1000",
				"timeOut": "9000",
				"extendedTimeOut": "1000",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut"
			};

			if (tipo == 'success') {
				toastr.success(mensaje, titulo, opts);
			}
			if (tipo == 'info') {
				toastr.info(mensaje, titulo, opts);
			}
			if (tipo == 'error') {
				toastr.error(mensaje, titulo, opts);
			}
			if (tipo == 'warning') {
				toastr.warning(mensaje, titulo, opts);
			}
		},
		notificacionRegularEstatica: function (titulo, mensaje, tipo) {

			var opts = {

				"debug": false,
				"onclick": null,
				"showDuration": "600",
				"hideDuration": "1000",
				"timeOut": "0",
				"extendedTimeOut": "0",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut",
				"tapToDismiss": false
			};

			if (tipo == 'success') {
				toastr.success(mensaje, titulo, opts);
			}
			if (tipo == 'info') {
				toastr.info(mensaje, titulo, opts);
			}
			if (tipo == 'error') {
				toastr.error(mensaje, titulo, opts);
			}
			if (tipo == 'warning') {
				toastr.warning(mensaje, titulo, opts);
			}
		},

		notificacionRegularEstaticaOscura: function (titulo, mensaje, tipo) {

			var opts = {

				"debug": false,
				"positionClass": rtl() || public_vars.$pageContainer.hasClass('right-sidebar') ? "toast-top-left" : "toast-top-right",
				"toastClass": "black",
				"onclick": null,
				"showDuration": "600",
				"hideDuration": "1000",
				"timeOut": "0",
				"extendedTimeOut": "0",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut",
				"tapToDismiss": false
			};

			if (tipo == 'success') {
				toastr.success(mensaje, titulo, opts);
			}
			if (tipo == 'info') {
				toastr.info(mensaje, titulo, opts);
			}
			if (tipo == 'error') {
				toastr.error(mensaje, titulo, opts);
			}
			if (tipo == 'warning') {
				toastr.warning(mensaje, titulo, opts);
			}
		},

		jsonPrettyHighlightToId: function (json, id_to_send_to) {
			json = JSON.parse(json);
			if (typeof json != 'string') {
				json = JSON.stringify(json, undefined, 2);
			}
			json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
			json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
			json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
				var cls = 'color: darkorange;';
				if (/^"/.test(match)) {
					if (/:$/.test(match)) {
						cls = 'color: red;';
					} else {
						cls = 'color: green;';
					}
				} else if (/true|false/.test(match)) {
					cls = 'color: blue;';
				} else if (/null/.test(match)) {
					cls = 'color: magenta;';
				}
				return '<span style="' + cls + '">' + match + '</span>';
			});
			document.getElementById(id_to_send_to).innerHTML = json;

		}
	}

})(neonNotifications || {})



