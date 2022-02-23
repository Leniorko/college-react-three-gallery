import axios from "axios";
import { response, Router } from "express";
import { redisClient } from "../app";

interface pixabayResponse {
  total: number;
  totalHist: number;
  hits: {
    id: number;
    pageURL: string;
    largeImageURL: string;
    fullHDURL: string;
    imageURL: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
  }[]
}

const secondsInADay = 86400;

export const apiRouter = Router();

apiRouter.use("/:page", async (req, res)=>{
  const pageToFetch = req.params.page;
  const apiURL = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&page=${pageToFetch}&per_page=12&safesearch=true`

  if(!pageToFetch){
    res.status(400).send("absent page param");
  }

  if (await redisClient.exists(pageToFetch)){
    console.log(`Redis page ${pageToFetch} hit. Retrieving data`)
    const pageData: pixabayResponse = JSON.parse(await redisClient.get(pageToFetch) ?? '');
    res.send(pageData);
  } else {
    console.log(`Didn't hit page ${pageToFetch} redis. Getting data from pixabay`);
    await axios.get(apiURL).then(data => {
      res.send(data.data)
      redisClient.set(pageToFetch, JSON.stringify(data.data));
      redisClient.expire(pageToFetch, secondsInADay);
    }).catch((error)=> res.status(500).send(`There was an error while calling api: ${error}`))
    
  }

});