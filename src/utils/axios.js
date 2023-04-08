import axios from "axios";

axios.defaults.baseURL = "https://5fc9346b2af77700165ae514.mockapi.io/";

axios.interceptors.request.use((config) => {
  const configToReturn = {
    ...config,
    headers: {
      ...config.headers,
    },
  };

  return configToReturn;
});

export default axios;
