import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
  FooterStyle,
  FormStyle,
} from "../styledComponents/divComponents";
import { ImgIcon } from "../styledComponents/imgComponents";
import ImagesComponent from "../components/ImagesComponent";

export interface iForm {
  name: string;
  email: string;
  message: string;
}

const LeaveMessagePage = () => {
  const { sendMessageToApi } = useContext(MessageContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Required field."),
    email: yup.string().email().required("Required field."),
    message: yup.string().required("Required field."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iForm>({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data: iForm) => {
    sendMessageToApi(data);
    console.log(data);
  };

  return (
    <DivAll>
      <DivContent>
        <DivForm>
          <Title>Reach out to us!</Title>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
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
      <ImagesComponent></ImagesComponent>
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
