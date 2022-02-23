import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { testRouter } from "./routes/testRoute";
import { createClient } from "redis";
import { apiRouter } from "./routes/apiRoute";
//Initing .env file
config();

// Currently enabled CORS from everywhere
// TODO change it when in prod

//Adding middlewares
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

export const redisClient = createClient();

(async () => {
  redisClient.on('error', (err) => console.log('Redis Client Error', err));
  await redisClient.connect();

  await redisClient.set('key', 'value');
  const value = await redisClient.get('key');
  console.log(value);
  
})();

//Adding routes to app
app.use("/testRoute", testRouter);
app.use("/api/v1", apiRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});