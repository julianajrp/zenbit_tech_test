import { createContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

export interface iMessage {
  name: string;
  email: string;
  message: string;
}

interface iMessageProviderProps {
  children: React.ReactNode;
}
interface iResponse {
  data: iMessage;
}
interface iMessageContext {
  sendMessageToApi: (event: iMessage) => void; //checar
  listMessage: iMessage[]; //checar
  setListMessage: React.Dispatch<React.SetStateAction<iMessage[]>>;
  //checar
  baseUrl: string;
}

export const MessageContext = createContext<iMessageContext>(
  {} as iMessageContext
);

export const MessageProvider = ({ children }: iMessageProviderProps) => {
  const baseUrl = "https://kenziehub.herokuapp.com";
  // const navigate = useNavigate();
  const [listMessage, setListMessage] = useState([] as iMessage[]);

  // useEffect(() => {
  //   async function getMessageFromApi() {
  //     try {
  //       const token: string | null = localStorage.getItem("authToken");
  //       axios.defaults.headers.authorization = `Bearer ${token}`;
  //       const user: iData = await axios.get(`${baseUrl}/profile`);
  //       console.log(user.data.Messages);
  //       setListMessage(user.data.Messages);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   console.log(listMessage);
  //   getMessageFromApi();
  // }, []);

  const sendMessageToApi = async (data: iMessage) => {
    try {
      const response: iResponse = await axios.post(`${baseUrl}/messages`, data);

      toast.success("Tecnologia adicionada com sucesso!");
      setListMessage([...listMessage, response.data]);
    } catch (error) {
      console.log(error);

      toast.error("Houve algum erro, tente novamente!");
    }
  };

  return (
    <MessageContext.Provider
      value={{
        sendMessageToApi,
        listMessage,
        setListMessage,
        baseUrl,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
