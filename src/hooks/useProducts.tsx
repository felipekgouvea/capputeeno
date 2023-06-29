import { ProductFetchResponse } from "@/types/ProductsFetchResponse";
import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/graphqlFilters";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, { query });
};

export function useProducts() {
  const { type, priority } = useFilter();
  const query = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type, priority],
  });

  return {
    data: data?.data?.data?.allProducts,
  };
}
