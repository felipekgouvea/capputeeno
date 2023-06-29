import formatCurrency from "@/utils/formatCurrency";
import { formatPrice } from "@/utils/formatPrice";
import { styled } from "styled-components";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;

  width: 200px;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }

  h3 {
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: var(--text--dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes--dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;
    > div {
      width: 180px;
      height: 1px;
      padding: 0;
      margin: 8px 0;
      background-color: var(--shapes);
    }
  }
`;

export function ProductCard(props: ProductCardProps) {
  return (
    <Card>
      <img src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{formatPrice(props.price)}</p>
      </div>
    </Card>
  );
}
