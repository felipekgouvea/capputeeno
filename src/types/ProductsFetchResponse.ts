import { Products } from "./Products";

export interface ProductFetchResponse {
  data: {
    allProducts: Products[];
  };
}
