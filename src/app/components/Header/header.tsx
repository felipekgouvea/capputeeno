"use client";
import React from "react";
import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { HeaderInputSearchIcon } from "../HeaderInput/headerInput";
import CartControl from "../CartControll/cartControl";

const sairaStencil = Saira_Stencil_One({
    subsets: ["latin"],
    weight: ["400"],
});

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`;

const Logo = styled.a`
    color: var(--logo--color);
    font-size: 40px;
    font-weight: 400;
    line-height: 60px;
`;

export const Header: React.FC = () => {
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputteno</Logo>
            <div>
                <HeaderInputSearchIcon placeholder="Procurando por algo específico?" />
                <CartControl />
            </div>
        </TagHeader>
    );
};

export default Header;
