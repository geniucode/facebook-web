import axios from "axios";

const postAxios = async (url, data) => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bereare " + token,
  };
  try {
    const response = await axios.post(`http://127.0.0.1:3001/${url}`, data, {
      headers,
    });
    return response.data;
  } catch (error) {
    return error.response?.data;
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
