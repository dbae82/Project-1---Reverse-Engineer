const routes = [
    // add links to movieId?
    // add title once we do head partial
    { href: '/logout'},
];

const authRoutes = [
    { href: '/login'},
    { href: 'register'},
];

module.exports = function navLinks(req, res, next) {
    if (req.session.currentUser) {
        res.locals.routes = routes;
    } else {
        res.locals.routes = authRoutes;
    }
    next();
};