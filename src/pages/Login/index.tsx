import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, View } from "react-native";
import BottomLogin from "../../components/bottom_login";
import LineOr from "../../components/lineOr";
import * as C from "./style";
import LoginSvg from "../../assets/login/LoginSvg.svg";
import Input from "../../components/input";
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <C.ContainerLogin onPress={Keyboard.dismiss}>
      <LoginSvg />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <C.Tittle>
          Vamos
          <C.BoldTittle> fazer login?</C.BoldTittle>
        </C.Tittle>

        <C.AltText>quis nostrud exercitation ullamco laboris nisi ut</C.AltText>

        <C.ContainerInputs>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="usuario@gmail.com"
          />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="minhasenha123"
          />
        </C.ContainerInputs>
      </KeyboardAvoidingView>
      <LineOr />
      <BottomLogin />
    </C.ContainerLogin>
  );
}

export default LoginScreen;
