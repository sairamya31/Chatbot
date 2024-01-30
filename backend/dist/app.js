import express from 'express';
import { config } from "dotenv";
import morgan from 'morgan';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
config();
const app = express();
//we will be using json format for incoming and outgoing data
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("env"));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map