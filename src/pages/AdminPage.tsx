import React, { useContext } from "react";
import CardMessageComponent from "../components/CardMessageComponent";
import { MessageContext } from "../contexts/MessageContext";
import { DivList } from "../styledComponents/divComponents";

const AdminPage = () => {
  const { listMessage } = useContext(MessageContext);
  console.log(listMessage, "naoisdjaos");
  return (
    <DivList>
      <>
        {listMessage.map((message, messageId) => {
          return <CardMessageComponent key={messageId} message={message} />;
        })}
      </>
    </DivList>
  );
};

export default AdminPage;
