import React, { createContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { iMessage, MessageContext } from "./MessageContext";

// import { iForm } from "../pages/Register/RegisterPage";
// import { iFormLog } from "../pages/Login/LoginPage";
// import api from "../services/services";
interface iAuthProviderProps {
  children: React.ReactNode;
}
export interface iFormLog {
  email: string;
  password: string;
}

interface iAuthContext {
  sendLogInToApi: (event: iFormLog) => void;
  logOut: () => void;
  loading: boolean;
}
// interface iAuthProviderUseStates {
//   modulo: string;
//   userName: string;
// }

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [authentication, setAuthentication] = useState(false);
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://kenziehub.herokuapp.com";
  const navigate = useNavigate();
  const { listMessage, setListMessage } = useContext(MessageContext);

  const sendLogInToApi = async (data: iFormLog) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, data);
      window.localStorage.clear();
      window.localStorage.setItem("authToken", response.data.token);
      const token = localStorage.getItem("authToken");
      axios.defaults.headers.common.authorization = `Bearer ${token}`;
      setAuthentication(true);
      toast.success("Login feito com sucesso!");
      setTimeout(() => navigate(`/${response.data.user.name}`), 2000);
    } catch (error) {
      console.log(error);
      toast.error("Houve um erro em seu login, tente novamente!");
    }
  };

  const logOut = () => {
    window.localStorage.clear();
    setAuthentication(false);
    toast.warn("Going back to Message Page");
    setTimeout(() => navigate("/"), 2000);
  };

  //   const sendResgisterToApi = async ( event:iForm) => {

  //     try {
  //       const response = await axios.post(`${baseUrl}/users`, event);

  //       console.log(response);
  //       toast.success("Cadastro feito com sucesso!");
  //       setTimeout(() => navigate(`/`), 2000);
  //     } catch (error) {
  //       console.log(error);

  //       toast.error("Houve algum erro, tente novamente!");
  //     }
  //   };

  return (
    <AuthContext.Provider
      value={{
        sendLogInToApi,
        logOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
