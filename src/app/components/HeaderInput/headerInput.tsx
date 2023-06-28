import { SearchIcon } from "@/app/Icons/search-icon";
import React, { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

export const HeaderInput = styled.input`
    width: 312px;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;

    background-color: var(--bg--secondary);

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text--dark);
`;

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function HeaderInputSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            <HeaderInput {...props} />
            <SearchIcon />
        </InputContainer>
    );
}
