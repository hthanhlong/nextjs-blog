import axios from "axios";

const axiosServer = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/v1`,
  withCredentials: true,
});

// Request interceptor
axiosServer.interceptors.request.use(
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
axiosServer.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);
// End of Response interceptor

export default axiosServer;
