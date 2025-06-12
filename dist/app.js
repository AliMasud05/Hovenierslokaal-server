"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
// Middleware setup
// Update CORS configuration
app.use((0, cors_1.default)({
    origin: true, // Allows all origins
    credentials: true
}));
// Add explicit OPTIONS handler
app.options('*', (0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
// Add request logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
// API routes
app.use("/api/v1", routes_1.default);
// Static file route
app.use("/uploads", express_1.default.static(path_1.default.join(process.cwd(), "uploads")));
// Test route
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(`<div style="background: black; border-radius: 15px; width: 700px; height: 200px; margin: auto; margin-top: 50px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1 style="color: white; text-align: center;">Welcome to the server of Art Jyotish!</h1>
    </div>`);
});
app.get("/", test);
// Error handling middleware
app.use(globalErrorHandler_1.default);
// Not Found handler
app.use(notFound_1.default);
exports.default = app;
