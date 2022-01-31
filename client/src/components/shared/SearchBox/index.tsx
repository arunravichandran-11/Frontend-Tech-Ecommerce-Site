import React, { useState } from "react";

import TextInput from "../../core/TextInput";

interface SearchBoxProps {
  onSearch?: (data: any) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [searchValue, setSearchedValue] = useState("");
  const getSearchedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchedValue(value);
    if (onSearch) {
      onSearch(value);
    }
  };
  return (
    <TextInput
      placeHolder="Search by product name"
      label="Search"
      onChange={getSearchedValue}
      icon={<i className="h24-icon-search"></i>}
      value={searchValue}
      expandable
      showActionButton
    />
  );
};

export default SearchBox;
