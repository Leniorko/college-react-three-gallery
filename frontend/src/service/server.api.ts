import axios from "axios";

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

export async function getImgData(){
  const randomPage = Math.floor(Math.random() * 40);
  return await (await axios.get(`http://localhost:8888/api/v1/${randomPage}`)).data; 
}