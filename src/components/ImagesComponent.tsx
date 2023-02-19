import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaceDiv1,
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
  FaceDiv2,
  FaceDiv3,
  FaceDiv4,
  FaceDiv5,
  FaceDiv6,
  MouthDiv1,
  MouthDiv2,
  MouthDiv3,
  MouthDiv4,
  MouthDiv5,
  MouthDiv6,
  Eye1Div1,
} from "../styledComponents/divComponents";

const ImagesComponent = () => {
  const navigate = useNavigate();
  const goToList = () => {
    navigate("/requests");
  };
  return (
    <>
      <FaceDiv1 onClick={goToList}>
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
    </>
  );
};

export default ImagesComponent;
