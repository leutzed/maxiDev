import axios from "axios";

export default axios.create({
  baseURL: 'http://www.maxithlon.com/maxi-xml/'
})