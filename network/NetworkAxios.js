import axios from "axios";

export const NetworkAxios = {
  async httpGet(url, config = []) {
    try {
      const response = await axios.get(url, config);

      if (response.status >= 400) {
        throw new Error("Something wrong!");
      } else {
        console.log("RESPONSE AXIOS", response);
        return response.data;
      }
    } catch (error) {
      return formatResponseError(error.message);
    }
  }
};

const formatResponseError = ({ message }) => ({
  message,
  error: true
});
