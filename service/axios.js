import axios from "axios";

const postAxios = async (url, data) => {
  try {
    const response = await axios.post(`http://127.0.0.1:3001/${url}`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
const getAxios = async (url, data) => {
  try {
    const response = await axios.get(`http://127.0.0.1:3001/${url}`, {
      params: data,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { postAxios, getAxios };
