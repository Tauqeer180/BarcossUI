import API_URLS from "../api_urls";
import { GET, POST, PUT, DELETE } from "../Adapter/base";

export const login = ({ username, password }) => {
  const data = {
    UserName: username,
    Password: password,
  };
  return POST(API_URLS.accounts.signIn, data);
};

export const register = (user) => {
  return POST(API_URLS.accounts.signUp, user);
};

export const getChannel = () => {
  return GET(API_URLS.accounts.channel);
};

export const getSellerType = () => {
  return GET(API_URLS.accounts.sellerType);
};
export const forgotPassword = (email) => {
  return POST(API_URLS.accounts.forgotPassword(email), null);
};
export const resetPassword = (email, code, password) => {
  return POST(API_URLS.accounts.resetPassword(email, code, password), null);
};
export const confirmEmail = (email, code) => {
  return POST(API_URLS.accounts.confirmEmail(email, code), null);
};
export const logout = () => {
  return POST(API_URLS.accounts.logout, null);
};
export const getProfileSeller = () => {
  return GET(API_URLS.accounts.getProfileSeller);
};
export const getMenuAfterLogin = () => {
  return GET(API_URLS.accounts.getMenuAfterLogin);
};
export const updateProfileSeller = (data) => {
  return PUT(API_URLS.accounts.updateProfileSeller, data);
};

// Role Management
export const getMenuUsers = () => {
  return GET(API_URLS.accounts.getMenuUsers);
};
export const getMenu = (userId, userTypeId) => {
  return GET(API_URLS.accounts.getMenu(userId, userTypeId));
};
export const updateMenu = (data) => {
  return POST(API_URLS.accounts.updateMenu, data);
};

