class PublicContoller {
	home(req, res): void {
		res.render('../public/pages/index', { addedUser: true, number: 1 });
	}

	admin(req, res): void {
		res.render('../public/pages/queue-admin');
	}

	client(req, res): void {
		res.render('../public/pages/queue-client');
	}
}

export default new PublicContoller();
