"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "../ProductCard/ProductCard";
import { styled } from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  max-width: 100%;

  margin-top: 32px;
`;

const ProductsList = () => {
  const { data } = useProducts();
  console.log(data);

  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
          key={product.id}
        />
      ))}
    </ListContainer>
  );
};

export default ProductsList;
