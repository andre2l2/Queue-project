export const PublicContoller = {
    home(req, res) {
        res.render('../public/pages/index');
    },
    admin(req, res) {
        res.render('../public/pages/queue-admin');
    },
    client(req, res) {
        res.render('../public/pages/queue-client');
    }
}