"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { FilterBar } from "./components/FilterBar/FilterBar";
import ProductsList from "./components/ProductsList/ProductsList";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductsList />
      </main>
    </QueryClientProvider>
  );
}
