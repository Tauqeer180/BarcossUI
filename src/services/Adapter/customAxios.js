import axios from "axios";
import session from "../../utils/session";
import history from "../../utils/history";
import common from "../../utils/common";

//https://dev.talluq.com.pk
//https://taluq.tharsol.com
//https://localhost:44322

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const customAxios = axios.create({
  baseURL: window.TALUQ_URL,
  headers: {
    Authorization: `Bearer ${session.get("token")}`,
  },
});

// Step-2: Create request, response & error handlers
const requestHandler = (request) => {
  // Token will be dynamic so we can use any app-specific way to always
  // fetch the new token before making the call
  //   document.body.classList.add("loading-indicator");
  request.headers.Authorization = `Bearer ${session.get("token")}`;
  return request;
};

const responseHandler = (response) => {
  //   document.body.classList.remove("loading-indicator");
  if (response.status === 401) {
    session.clear();
    history.push("/login");
  }
  return response;
};

const errorHandler = (error) => {
  //   document.body.classList.remove("loading-indicator");
  if (!common.empty(error.response))
    if (error.response.status === 401) {
      session.clear();
      history.push("/login");
      window.location.reload();
    }
  return Promise.reject(error);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

// Step-4: Export the newly created Axios instance to be used in different locations.
export default customAxios;
