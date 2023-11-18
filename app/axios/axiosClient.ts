import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_APP_ENDPOINT}/api/v1`, // Replace with your API base URL
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    // If token is present add it to request's Authorization Header
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
// End of Request interceptor

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response.data;
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);
// End of Response interceptor

export default axiosClient;
