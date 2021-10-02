class PublicContoller {
	home(req, res): void {
		res.render('../public/pages/index');
	}

	admin(req, res): void {
		res.render('../public/pages/queue-admin');
	}

	client(req, res): void {
		res.render('../public/pages/queue-client');
	}
}

export default new PublicContoller();
