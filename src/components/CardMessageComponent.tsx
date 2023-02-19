import React, { useContext } from "react";
import { iMessage, MessageContext } from "../contexts/MessageContext";
interface iCardMessageProps {
  message: iMessage;
}

const CardMessageComponent = ({ message }: iCardMessageProps) => {
  const { baseUrl, listMessage } = useContext(MessageContext);
  return (
    <div>
      <div>
        <h2>{message.name}</h2>
        <p>{message.message}</p>
        <p> by: {message.email}</p>
      </div>
    </div>
  );
};

export default CardMessageComponent;
