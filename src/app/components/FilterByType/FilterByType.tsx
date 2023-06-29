"use client";

import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filterTypes";
import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
  hover: boolean;
}

const FilterList = styled.ul<FilterItemProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  padding: 0;
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  list-style: none;
  cursor: pointer;

  color: var(--text--dark);

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange--low)" : ""};
`;

const FilterByType = () => {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };

  return (
    <FilterList hover>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        TODOS OS PRODUTOS
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        CAMISETAS
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        CANECAS
      </FilterItem>
    </FilterList>
  );
};

export default FilterByType;
