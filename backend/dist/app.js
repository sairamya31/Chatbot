import express from 'express';
import { config } from "dotenv";
config();
const app = express();
//we will be using json format for incoming and outgoing data
app.use(express.json());
export default app;
//# sourceMappingURL=app.js.map