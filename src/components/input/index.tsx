import React from "react";
import * as C from "./style";

type IKeyBoardType =
  | "numeric"
  | "number-pad"
  | "decimal-pad"
  | "email-address"
  | "url"
  | "phone-pad";

interface InputProps {
  onChangeText: (value: string) => void;
  value: string;
  placeholder?: string;
  keyboardType?: IKeyBoardType;
}
const Input = ({ value, placeholder, keyboardType, ...props }: InputProps) => {
  return <C.Input value={value} placeholder={placeholder} {...props} />;
};

export default Input;
