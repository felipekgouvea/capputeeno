"use client";

import React from "react";
import FilterBayType from "../FilterBayType/filterBayType";
import { styled } from "styled-components";

interface FilterBarProps {}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
`;

const FilterBar = (props: FilterBarProps) => {
    return (
        <FilterContainer>
            <FilterBayType />
        </FilterContainer>
    );
};

export default FilterBar;
