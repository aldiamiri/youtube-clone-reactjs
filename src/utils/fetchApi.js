import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "e06cdae2bamsh1856fbe0d84a469p12293bjsnaa62109ea6b2",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fecthApi = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  return response.data;
};
