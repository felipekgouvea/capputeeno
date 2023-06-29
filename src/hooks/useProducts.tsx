import { ProductFetchResponse } from "@/types/ProductsFetchResponse";
import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { FilterType } from "@/types/filterTypes";
import { getCategoryByType } from "@/utils/getCategoryByType";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, { query });
};

const mountQuery = (type: FilterType) => {
  if (type === FilterType.ALL)
    return `query{
    allProducts{
      id,
      name,
      price_in_cents,
      image_url
    }
  }`;
  return `query{
    allProducts(filter: {category: "${getCategoryByType(type)}"}){
      id,
      name,
      price_in_cents,
      image_url
    }
  }`;
};

export function useProducts() {
  const { type } = useFilter();
  const query = mountQuery(type);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type],
  });

  return {
    data: data?.data?.data?.allProducts,
  };
}
