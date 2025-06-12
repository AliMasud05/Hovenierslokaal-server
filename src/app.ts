import cors from "cors";
import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import path from "path";
import morgan from "morgan";

const app: Application = express();

// Middleware setup
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://www.hovenierslokaal.nl", // Removed trailing slash
      "https://hovenierslokaal.nl" // Add non-www version
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['Content-Length', 'X-Powered-By'] // Optional but helpful
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

// API routes
app.use("/api/v1", router);

// Static file route
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Test route
const test = async (req: Request, res: Response) => {
  res.send(
    `<div style="background: black; border-radius: 15px; width: 700px; height: 200px; margin: auto; margin-top: 50px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1 style="color: white; text-align: center;">Welcome to the server of Art Jyotish!</h1>
    </div>`
  );
};
app.get("/", test);

// Error handling middleware
app.use(globalErrorHandler);

// Not Found handler
app.use(notFound);

export default app;
