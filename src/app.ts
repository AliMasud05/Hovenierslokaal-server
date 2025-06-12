import cors from "cors";
import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import path from "path";
const app: Application = express();

// Middleware setup
app.use(
  cors({
    origin: ["http://localhost:3000", "https://www.hovenierslokaal.nl/"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1", router);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

const test = async (req: Request, res: Response) => {
  res.send(
    `<div style="background: black; border-radius: 15px; width: 700px; height: 200px; margin: auto; margin-top: 50px; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="color: white; text-align: center;">Welcome to the server of Art Jyotish!</h1></div>`
  );
};

app.get("/", test);

app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
