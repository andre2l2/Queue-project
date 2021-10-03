function run() {
	const $button = document.querySelector('button');
	$button.addEventListener('click', async () => {
		const $inputName = document.querySelector('input');
		const data = {
			name: $inputName.value,
		};

		await fetch('http://localhost:3333/queue', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	});
}

export { run };
