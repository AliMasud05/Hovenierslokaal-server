"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = require("../modules/user/user.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const contact_route_1 = require("../modules/contact/contact.route");
const media_route_1 = require("../modules/media/media.route");
const gallery_route_1 = require("../modules/gallery/gallery.route");
const mail_route_1 = require("../modules/mail/mail.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: user_routes_1.UserRoutes,
    },
    {
        path: "/auth",
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: "/contacts",
        route: contact_route_1.ContactRoutes,
    },
    {
        path: "/medias",
        route: media_route_1.MediaRoutes,
    },
    {
        path: "/galleries",
        route: gallery_route_1.GalleryRoutes,
    },
    {
        path: "/mail",
        route: mail_route_1.MailRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
