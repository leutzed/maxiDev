import axios from "axios";

export const api = axios.create({
  baseURL: 'http://www.maxithlon.com/maxi-xml/'
})