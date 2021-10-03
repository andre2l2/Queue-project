import SoketUtils from './SocketUrils.js';
import NextCliet from './nextClient.js';

try {
	SoketUtils.get();
	NextCliet.call();
} catch (error) {
	Swal.fire({
		title: 'Error!',
		text: error,
		icon: 'error',
		confirmButtonText: 'Ok',
	});
}
