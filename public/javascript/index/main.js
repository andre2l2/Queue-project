function superAlert(title, text) {
	Swal.fire({
		icon: 'error',
		title: title,
		text: text,
	});
}

const params = new URLSearchParams(window.location.search);
if (params.get('error') === 'invalid-email') superAlert('Oops...', 'Sorry input email is not empty!');
if (params.get('error') === 'invalid-name') superAlert('Oops...', 'Sorry input name is not empty!');
