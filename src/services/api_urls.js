// const BASE_URL = '' // const BASE_URL='https://taluq.tharsol.com' function
// getAxiosHeaders(authToken) {     return {         headers: {
// 'Authorization': `Bearer ${authToken}`         }     }; } function
// getAxiosHeadersWithoutToken() {     return {         headers: {
// "Access-Control-Allow-Origin": "*",
// "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"         }
//     }; }
const accounts = {
  signIn: `Account/Login`,
  signUp: `Account/RegisterSeller`,
  logout: `Account/Logout`,
  channel: `Account/GetChannel`,
  sellerType: `Account/GetSellerType`,
  // facebookLogin: `Account/login/facebook`,
  resetPassword: (email, code, password) =>
    `Account/resetpassword?email=${email}&code=${code}&password=${password}`,
  confirmEmail: (email, code) =>
    `Account/ConfirmEmail?email=${email}&code=${code}`,
  forgotPassword: (email) => `Account/ForgotPassword?email=${email}`,
  getMenuAfterLogin: `Account/GetMenuAfterLogin`,
  // `Account/registerparent`, registerPayee: `Account/register-school-payee`,
  // confirmEmail: `Account/confirmemail`, setParentPassword:
  // `Account/setparrentpassword`, resendConfirmEmail:
  // `Account/resend/confirmemail`,
  getProfileSeller: `Account/GetProfileSeller`,
  updateProfileSeller: `Account/ChangeProfileSeller`,
  getMenuUsers: `Account/GetMenuUsers`,
  getMenu: (userId, userTypeId) =>
    `Account/GetMenu?userId=${userId}&userTypeId=${userTypeId}`,
  updateMenu: `Account/UpdateMenu`,
};

const lookup = {
  province: `Lookup/GetProvinces`,
  city: `Lookup/GetCities`,
  getBricks: `Lookup/GetBricks`,
  attribute: (brandIds) => `Lookup/GetAttribute?brandIds=${""}`,
  attributeOption: (attributeIds) =>
    `Lookup/GetAttributeOption?attributeIds=${attributeIds}`,
  productCategory: (channelId, level) =>
    `Lookup/GetProductCategoryEav?channelId=${channelId}&level=${level}`,
  productBrand: (channelId) => `Lookup/GetProductBrand?channelId=${channelId}`,
  company: (channelId) => `Lookup/GetCompany?channelId=${channelId}`,
  productWarranty: `Lookup/GetProductWarranty`,
  productUnit: `Lookup/GetProductUnit`,
  getSchemeTypes: `Lookup/GetSchemeTypes`,
  getSchemeDiscountTypes: `Lookup/GetSchemeDiscountTypes`,
  getSchemeBasis: `Lookup/GetSchemeBasis`,
  getDealTypes: `Lookup/GetDealTypes`,
  getCategoryLookup: (lookupCategoryId) =>
    `Lookup/GetCategoryLookup?catIds=${lookupCategoryId}`,
  getSellersByCity: `Lookup/GetSeller`,
};
const products = {
  getProducts: `Products/GetProductsForSeller`,
  getProductsForExport: `Products/GetProductsForSellerToExport`,
  getProductById: (Id) => `Products/GetProductByIdForSeller?productId=${Id}`,
  addProducts: `Products/AddProduct`,
  updateProducts: `Products/UpdateProduct`,
  removeProduct: (Id) => `Products/RemoveProduct?id=${Id}`,
  liveProduct: (id) => `Products/${id}`,
  addAttributeOption: `Products/AddAttributeOption`,
  uploadProducts: `Products/UploadBulkProducts`,
  updateStockInternally: `Products/AddProductStockInternally`,
};
const scheme = {
  getProductsForSchemeSeller: `Products/GetProductsForSchemeSeller`,
  getScheme: `Scheme/GetSellerScheme`,
  addScheme: `Scheme/AddScheme`,
  removeScheme: (Id) => `Scheme/RemoveScheme?id=${Id}`,
  updateScheme: (Id) => `Scheme/UpdateScheme/${Id}`,
};
const banner = {
  getProductsForBannerSeller: `Banner/GetProductsForBannerSeller`,
  getSellerSchemeBanner: `Banner/GetSellerSchemeBanner`,
  productBannerBrand: `Lookup/GetProductBrandCityWise`,
  productBannerCategory: `Lookup/GetProductCategoryCityWise`,
  addBanner: `Banner/Save`,
  getBanner: `Banner/Get`,
};
const orders = {
  getOrders: `Orders/GetOrdersSeller`,
  getOrdersSellerForAdmin: `Orders/GetOrdersSellerForAdmin`,
  getOrdersSellerDetail: (orderId) =>
    `Orders/GetOrdersSellerDetail?orderId=${orderId}`,
  getOrdersSellerExport: (id) => `Orders/GetOrdersSellerExport?orderIds=${id}`,
  shippedOrder: (statusId) => `Orders/UpdateOrderStatus?statusId=${statusId}`,
  cancelledOrder: () => `Orders/UpdateOrderStatus?statusId=${40}`,
};
const uploaders = {
  uploadBrands: `Bulk/Brands`,
  uploadStock: `Bulk/Product/Stock`,
  uploadVariant: `Bulk/Variants`,
  uploadCategory: `Bulk/Categories`,
  getBrandsForProducts: `Bulk/GetBrandsForProducts`,
  getCategoriesForProducts: `Bulk/GetCategoriesForProducts`,
};
const dashboard = {
  dashboardSeller: `Home/GetDashboardSeller`,
  dashboardAdmin: (cityIds) => `Home/GetDashboardAdmin?cityIds=${cityIds}`,
  productsByQuantity: `Home/GetTopQuantityProduct`,
  productsByValue: `Home/GetTopValueProduct`,
  topSellers: `Home/GetTopSellers`,
  topBuyers: `Home/GetTopRetailers`,
  getBasket: `Home/GetBasket`,
};
const brands = {
  getBrands: `Brand/GetBrands`,
  addBrand: `Brand`,
  getBrandById: (id) => `Brand/${id}`,
  updateBrand: (id) => `Brand/${id}`,
  deleteBrand: (id) => `Brand/${id}`,
};
const groups = {
  getGroups: `GroupManagement`,
  getGroupProducts: `GroupManagement/GetGroupProducts`,
  addGroup: `GroupManagement`,
  getGroupById: (id) => `GroupManagement/${id}`,
  getGroupMappingById: (id) => `GroupManagement/GetGroupMappingById?id=${id}`,
  updateGroup: (id) => `GroupManagement/${id}`,
  updateGroupStatus: (id) => `GroupManagement/UpdateGroupStatus/${id}`,
  updateGroupMapping: (id) => `GroupManagement/UpdateGroupMapping/${id}`,
};
const regions = {
  getRegions: `RegionManagement`,
  addRegion: `RegionManagement`,
  getRegionById: (id) => `RegionManagement/${id}`,
  updateRegion: (id) => `RegionManagement/${id}`,
  updateRegionStatus: (id) => `RegionManagement/UpdateRegionStatus/${id}`,
  getRegionRetailers: `RegionManagement/GetRegionRetailers`,
  getRegionMappingById: (id) =>
    `RegionManagement/GetRegionMappingById?id=${id}`,
  updateRegionMapping: (id) => `RegionManagement/UpdateRegionMapping/${id}`,
  getRegionRetailerDetail: (regionId, retailerId) =>
    `RegionManagement/GetRegionRetailerDetail?regionId=${regionId}&retailerId=${retailerId}`,
  updateRegionRetailerDetail: `RegionManagement/UpdateRegionRetailerDetail`,
};
const orderBooker = {
  getOrderBooker: `OrderBooker`,
  addOrderBooker: `OrderBooker`,
  getBookerById: (id) => `OrderBooker/${id}`,
  updateBooker: (id) => `OrderBooker/${id}`,
  updateOrderBookerStatus: (id) => `OrderBooker/UpdateOrderBookerStatus/${id}`,
  getBookerGroupRegion: `OrderBooker/GetOrderBookerGroupRegion`,
  getBookerMapping: (id, date) =>
    `OrderBooker/GetOrderBookerMapping?id=${id}&date=${date}`,
  updateBookerMapping: `OrderBooker/UpdateOrderBookerMapping`,
  getSaleOrderMaster: `GetSaleOrderMaster`,
  getSaleOrderDetail: (retailerId, bookingDate) =>
    `GetSaleOrderDetail?retailerId=${retailerId}&bookingDate=${bookingDate}`,
};
const company = {
  getCompany: `Company/GetCompany`,
  addCompany: `Company`,
  getCompanyById: (id) => `Company/${id}`,
  updateCompany: (id) => `Company/${id}`,
  deleteCompany: (id) => `Company/${id}`,
};
const category = {
  getCategory: `Category/GetCategory`,
  addCategory: `Category`,
  getCategoryById: (id) => `Category/${id}`,
  updateCategory: (id) => `Category/${id}`,
  deleteCategory: (id) => `Category/${id}`,
};
const notifications = {
  getNotification: `Notification/GetNotification`,
  getNotificationLink: `Notification/GetNotificationLink`,
  addNotification: `Notification/AddNotification`,
  getNotificationById: (id) => `Notification/GetById?id=${id}`,
  deleteNotification: (id) => `Notification/${id}`,
  updateNotification: (id) => `Notification/UpdateNotification/${id}`,
};
const reports = {
  getInventory: `Report/GetInventory`,
  getInPercentage: `Report/GetInPercentage`,
  getTopSellerProducts: `Report/GetTopSellerProduct`,
  getOrderSummary: `Report/GetOrderSummary`,
  getRetailerSummary: `Report/GetRetailerSummary`,
};
const rider = {
  addRider: `Dlvr/AddDeliveryMan`,
  getRider: `Dlvr/GetDeliveryMans`,
  generateDSS: `Dlvr/GenerateDSS`,
  updateDSS: `Dlvr/UpdateDssDeliveryMan`,
  getAllDss: `Dlvr/GetAllDss`,
};
const recommendation = {
  getRecommendationForPortal: (channelId, cityId, typeId) =>
    `Recommendation/GetRecommendationForPortal?ChannelId=${channelId}&CityId=${cityId}&TypeId=${typeId}`,
  updateRecommendation: `Recommendation/UpdateRecommendationManagement`,
};

const sellers = {
  getAllSellers: `Seller/GetAllSellers`,
};
const retailerLinking = {
  getLinkedRetailer: `Retailer/GetLinkedRetailer`,
  updateLinking: `Account/LinkToSeller`,
};
export default {
  accounts,
  sellers,
  notifications,
  dashboard,
  lookup,
  products,
  orders,
  scheme,
  uploaders,
  banner,
  brands,
  groups,
  regions,
  orderBooker,
  company,
  category,
  reports,
  rider,
  recommendation,
  retailerLinking,
};
