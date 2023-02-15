import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const LoginAdminPage = () => {
  const navigate = useNavigate();
  const goToPreviousPage = () => {
    navigate("/");
  };
  const logSchema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  return <div>LoginAdminPage</div>;
};

export default LoginAdminPage;
