import dotenv from "dotenv";

dotenv.config({
  path: __dirname + "/./../../client/.env"
});

export const CATEGORY_API_URL = process.env.REACT_APP_CATEGORY_API_URL;
export const PRODUCT_API_URL = process.env.REACT_APP_PRODUCT_API_URL;
export const USER_API_URL = process.env.REACT_APP_USER_API_URL;
export const DATABASE_URI = process.env.MONGODB_URI;
export const SECRET_KEY = process.env.PASSPORT_SECRET_KEY;
export const PRODUCTS_PER_PAGE = process.env.REACT_APP_PRODUCTS_PER_PAGE;
