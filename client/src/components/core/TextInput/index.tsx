import styled from "@emotion/styled";
import React from "react";

interface TextInputProps {
  placeHolder?: string;
  label?: string;
  icon?: JSX.Element;
  expandable?: boolean;
  onChange?: React.ChangeEventHandler;
  value?: string;
  showActionButton?: boolean;
  onAction?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyleTextInputContainer = styled.div`
  width: 100%;
  display: flex;
  height: 48px;
  justify-content: flex-end;
`;

const StyledTextInput = styled.input<any>`
  width: 250px;
  padding: 10px;
  border: 2px solid #7980a9;
  border-radius: 4px 0 0 4px;
  border-right: ${(props) => {
    return props.showActionButton ? "none" : "2px solid #7980a9";
  }};
  outline: none;
  font-size: 16px;
  background: white;
  transition: width 0.3s linear;
  &.expand {
    width: 100%;
  }
`;

const InputActionButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  outline: none;
  cursor: pointer;
  border: 2px solid #7980a9;
  border-radius: 0 4px 4px 0;
  border-left: none;
  font-size: 16px;
  border-left: 2px solid #7980a9;
  background-color: tomato;
  color: white;

  i {
    font-size: 20px;
  }

  span {
    padding: 0px 8px;
  }
`;

const TextInput = ({
  placeHolder,
  label,
  icon,
  expandable,
  onChange,
  value,
  showActionButton,
  onAction,
}: TextInputProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const expandInputBox = (elem: HTMLInputElement) => {
    if (elem && expandable) {
      elem.classList.toggle("expand");
    }
  };

  const handleFocus = () => {
    if (inputRef.current) {
      expandInputBox(inputRef.current);
    }
  };

  return (
    <StyleTextInputContainer>
      <StyledTextInput
        showActionButton={showActionButton}
        type="text"
        onFocus={handleFocus}
        onBlur={handleFocus}
        onChange={onChange}
        ref={inputRef}
        value={value}
        placeholder={placeHolder}
      />
      {showActionButton && (
        <InputActionButton onClick={onAction}>
          {icon}
          <span>{label || "Enter"}</span>
        </InputActionButton>
      )}
    </StyleTextInputContainer>
  );
};

export default TextInput;
