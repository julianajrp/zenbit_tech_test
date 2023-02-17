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
  DivAll,
  DivContent,
  DivForm,
  DivImg,
  DivMap,
  Eye1Div1,
  Eye1Div2,
  Eye1Div3,
  Eye1Div4,
  Eye1Div5,
  Eye1Div6,
  Eye2Div1,
  Eye2Div2,
  Eye2Div3,
  Eye2Div4,
  Eye2Div5,
  Eye2Div6,
  FaceDiv1,
  FaceDiv2,
  FaceDiv3,
  FaceDiv4,
  FaceDiv5,
  FaceDiv6,
  FooterStyle,
  FormStyle,
  MouthDiv1,
  MouthDiv2,
  MouthDiv3,
  MouthDiv4,
  MouthDiv5,
  MouthDiv6,
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
    <DivAll>
      <DivContent>
        <DivForm>
          <Title>Reach out to us!</Title>
          <FormStyle onSubmit={handleSubmit((e) => sendMessageToApi(e))}>
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
          </FormStyle>
        </DivForm>
        <DivMap></DivMap>
      </DivContent>
      <FaceDiv1>
        <Eye1Div1></Eye1Div1>
        <Eye2Div1></Eye2Div1>
        <MouthDiv1></MouthDiv1>
      </FaceDiv1>
      <FaceDiv2>
        <Eye1Div2></Eye1Div2>
        <Eye2Div2></Eye2Div2>
        <MouthDiv2></MouthDiv2>
      </FaceDiv2>
      <FaceDiv3>
        <Eye1Div3></Eye1Div3>
        <Eye2Div3></Eye2Div3>
        <MouthDiv3></MouthDiv3>
      </FaceDiv3>
      <FaceDiv4>
        <Eye1Div4></Eye1Div4>
        <Eye2Div4></Eye2Div4>
        <MouthDiv4></MouthDiv4>
      </FaceDiv4>
      <FaceDiv5>
        <Eye1Div5></Eye1Div5>
        <Eye2Div5></Eye2Div5>
        <MouthDiv5></MouthDiv5>
      </FaceDiv5>
      <FaceDiv6>
        <Eye1Div6></Eye1Div6>
        <Eye2Div6></Eye2Div6>
        <MouthDiv6></MouthDiv6>
      </FaceDiv6>
      <FooterStyle>
        <DivImg>
          <ImgIcon
            src={facebook}
            alt=""
            onClick={() =>
              (window.location.href = "https://www.facebook.com/zenBitTech/")
            }
          />
          <ImgIcon
            src={twitter}
            alt=""
            onClick={() =>
              (window.location.href = "https://twitter.com/zen_bit")
            }
          />
          <ImgIcon
            src={linkedin}
            alt=""
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/zenbitteam/?hl=pt")
            }
          />
          <ImgIcon
            src={pinterest}
            alt=""
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/company/zenbit-tech/?originalSubdomain=pl")
            }
          />
        </DivImg>
      </FooterStyle>
    </DivAll>
  );
};

export default LeaveMessagePage;
