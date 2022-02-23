import { Router } from "express";

export const testRouter = Router();

testRouter.use((req, res, next)=>{
  console.log("Visited test route");
  res.send("Server works");
})