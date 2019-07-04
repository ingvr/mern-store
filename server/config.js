import dotenv from "dotenv";
dotenv.config({
  path: __dirname + "/./../.env"
});

export const CATEGORY_API_URL = process.env.REACT_APP_CATEGORY_API_URL;
export const PRODUCT_API_URL = process.env.REACT_APP_PRODUCT_API_URL;
