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
import { InputDefault, TextDefault } from "../styledComponents/formComponents";
import { ErrorLine, Title } from "../styledComponents/textComponents";
import { ButtonDefault } from "../styledComponents/buttonComponents";
import {
  DivImg,
  Eye1Div1,
  Eye2Div1,
  FaceDiv1,
  FooterStyle,
  MouthDiv1,
} from "../styledComponents/divComponents";
import { ImgIcon } from "../styledComponents/imgComponents";
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
        <Title>Reach out to us!</Title>
        <form onSubmit={handleSubmit((e) => sendMessageToApi(e))}>
          <InputDefault
            type="text"
            placeholder="Your name*"
            {...register("name")}
          />
          <ErrorLine>{errors.name?.message?.toString()}</ErrorLine>
          <InputDefault
            type="text"
            placeholder="Your email*"
            {...register("email")}
          />
          <ErrorLine>{errors.email?.message?.toString()}</ErrorLine>
          <TextDefault
            type="text"
            placeholder="Your message*"
            {...register("message")}
          />
          <ErrorLine>{errors.message?.message?.toString()}</ErrorLine>
          <ButtonDefault type="submit"> Send message</ButtonDefault>
        </form>
      </div>
      <FaceDiv1>
        <Eye1Div1></Eye1Div1>
        <Eye2Div1></Eye2Div1>
        <MouthDiv1></MouthDiv1>
      </FaceDiv1>
      <FooterStyle>
        <DivImg>
          <ImgIcon src={facebook} alt="" />
          <ImgIcon src={twitter} alt="" />
          <ImgIcon src={linkedin} alt="" />
          <ImgIcon src={pinterest} alt="" />
        </DivImg>
      </FooterStyle>
    </div>
  );
};

export default LeaveMessagePage;
