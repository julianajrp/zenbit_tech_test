import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { iMessage } from "../contexts/MessageContext";
import pinterest from "../assets/pinterest.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import { MessageContext } from "../contexts/MessageContext";

const LeaveMessagePage = () => {
  const navigate = useNavigate();
  const { sendMessageToApi } = useContext(MessageContext);
  const goToLogin = () => {
    navigate("/login");
  };
  const logSchema = yup.object().shape({
    name: yup.string().required("Required field."),
    email: yup.string().email().required("Required field."),
    message: yup.string().required("Required field."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iMessage>({
    resolver: yupResolver(logSchema),
  });
  return (
    <div>
      <div>
        <h1>Reach out to us!</h1>
        <form onSubmit={handleSubmit((e) => sendMessageToApi(e))}>
          <input type="text" placeholder="Your name*" {...register("name")} />
          <p>{errors.name?.message?.toString()}</p>
          <input type="text" placeholder="Your email*" {...register("email")} />
          <p>{errors.email?.message?.toString()}</p>
          <input
            type="text"
            placeholder="Your message*"
            {...register("message")}
          />
          <p>{errors.message?.message?.toString()}</p>
          <button type="submit"> Send message</button>
        </form>
      </div>
      <footer>
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={linkedin} alt="" />
        <img src={pinterest} alt="" />
      </footer>
    </div>
  );
};

export default LeaveMessagePage;
