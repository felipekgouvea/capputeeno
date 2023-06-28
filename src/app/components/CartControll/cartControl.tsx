import { CartIcon } from "@/app/Icons/cart-icon";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import React from "react";
import { styled } from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;

    background-color: var(--delete--color);
    color: #fff;

    margin-left: -10px;
`;

const Container = styled.div`
    position: relative;
`;

const CartControl: React.FC = () => {
    // const { value } = useLocalStorage("cart-items");

    return (
        <div>
            <CartIcon />
            <CartCount>2</CartCount>
        </div>
    );
};

export default CartControl;
