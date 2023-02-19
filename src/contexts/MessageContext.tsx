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
  const baseUrl = "https://api-zenbit-tech.onrender.com";
  // const baseUrl = "http://localhost:4000";
  // const navigate = useNavigate();
  const [listMessage, setListMessage] = useState([] as iMessage[]);

  useEffect(() => {
    async function getMessageFromApi() {
      try {
        const messages: iResponse = await axios.get(`${baseUrl}/list`);
        console.log(messages.data.message, "aqui1");
        setListMessage([...listMessage, messages.data]);
        console.log(listMessage, "aqui2");
      } catch (error) {
        console.log(error);
      }
    }
    console.log(listMessage);
    getMessageFromApi();
  }, []);

  const sendMessageToApi = async (data: iMessage) => {
    try {
      const response: iResponse = await axios.post(`${baseUrl}/`, data);

      console.log(response.data);
      setListMessage([...listMessage, response.data]);
      console.log(listMessage, "aquiii");
    } catch (error) {
      console.log(error);
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
