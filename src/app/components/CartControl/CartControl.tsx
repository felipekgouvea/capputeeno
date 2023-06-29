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
    color: white;

    margin-left: -10px;
`;

const Container = styled.div`
    position: relative;
`;

export function CartControl() {
    // const { value } = useLocalStorage("cart-items", []);

    return (
        <Container>
            <CartIcon />
            <CartCount>2</CartCount>
        </Container>
    );
}
