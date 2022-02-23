import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { testRouter } from "./routes/testRoute";
//Initing .env file
config();

// Currently enabled CORS from everywhere
// TODO change it when in prod

//Adding middlewares
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;


//Adding routes to app
app.use("/testRoute", testRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});