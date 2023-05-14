import axios from "axios";

export const apiCall = async (url: string, method: string, data?: any) => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = token;
  const response = await axios({
    method: method,
    url: url,
    data: data,
  });
  return response;
};
