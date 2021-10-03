const Serving = {
	render: (queue = 0) => {
		const $serving = document.querySelector('#serving');
		$serving.innerHTML = `${queue}`.padStart(5, '0');
	},
};

export { Serving };
