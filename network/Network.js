
export const Network = {
  async httpGet(url, options = {}) {
    try {
      const response = await fetch(url, options);
      console.log("RESPONSE FETCH", response);
      if (response.status >= 400) {
        throw new Error("Something wrong!");
      }
      return await response.json();
    } catch (error) {
      return formatResponseError(error.message);
    }
  }
};

const formatResponseError = ({ message }) => ({
  message,
  error: true
}); //Return an object
