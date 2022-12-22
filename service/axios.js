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
    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};
const postWithImageAxios = async (url, data) => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "multipart/form-data; boundary=something",
    Authorization: "Bereare " + token,
  };
  try {
    const response = await axios.post(`http://127.0.0.1:3001/${url}`, data, {
      headers,
    });
    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};
const getAxios = async (url, data) => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    authorization: "Bereare " + token,
  };
  try {
    const response = await axios.get(`http://127.0.0.1:3001/${url}`, {
      headers,
    });
    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};

export { postAxios, getAxios, postWithImageAxios };
