import styled, { css, keyframes } from "styled-components";
import home from "../assets/cover_1.jpg";
import homeMobile from "../assets/home_mobile.jpg";
import imgslider1 from "../assets/image-slider-1.jpg";
import imgslider2 from "../assets/image-slider-2.jpg";
import imgslider3 from "../assets/image-slider-3.jpg";
import imgslider4 from "../assets/image-slider-4.jpg";

export const BackGround = styled.div`
  background-image: url(${home});
  background-size: cover;
  background-position: center;
  height: 100vh;
  /* width: 100vw; */
  width: 100%;
  /* margin-top: 80px; */
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  overflow: hidden;
  object-fit: cover;
  /* margin-top: 80px; */

  @media (max-width: 1110px) {
    height: 45vh;
    width: 100vw;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  /* margin-top: 5%; */
  background-color: #000000;

  @media (max-width: 1110px) {
    flex-direction: column;
  }
`;
export const AnotherContainer = styled.div`
  display: flex;
  /* margin-top: 5%; */
  background-color: #000000;

  @media (max-width: 1110px) {
    flex-direction: column;
  }
`;

export const Introduction = styled.div`
  margin-top: 8rem;
  /* width: 50%; */
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 2%;
  @media (max-width: 1110px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const Text = styled.p`
  color: var(--primary-color);
  font-size: 50px;
  /* margin-left: 8rem; */
  /* margin-right: 5rem; */
  display: flex;
  align-items: center;
  flex-direction: column;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
`;

export const MobileText = styled.p`
  width: 100%;
  color: var(--primary-color);
  // margin-left: 10rem;
  /* margin-top: 20px; */
  font-size: 32px;
  // display: flex;
  text-align: center;
  align-items: center;
  // flex-direction: column;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
`;

export const TabletText = styled.p`
  color: var(--primary-color);
  /* margin-top: 10px; */
  /* font-size: 70px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
`;

export const ImageGallery = styled.div`
  padding-top: 2rem;
  border-radius: 20px;
  margin-left: 10%;
  margin-bottom: 3%;
  /* margin-top: -25%; */
  display: flex;
  flex-direction: row;
  background-color: #171717;

  @media (max-width: 1110px) {
    width: 95%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 5%;
    /* flex-direction: column-reverse; */
  }
`;

export const ImgCart = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  height: auto;
  width: 50vw;
  @media (max-width: 800px) {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    margin-top: 0.2rem;
    width: 100%;
    height: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
`;

export const Column = styled.div`
  flex: 25%;
  padding: 0 4px;
  ${({ id }) =>
    id &&
    css`
      margin-top: 18%;
      /* height: 90%; */
    `}
`;

export const Img = styled.img`
  border-radius: 5px;
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: 0.7s;
    z-index: 0.5;
    filter: drop-shadow(10px 5px 10px #161411);
  }
`;

//////// ///

export const Portfolio = styled.div`
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  /* padding: 5px 0; */
`;
export const Container = styled.div`
  background: linear-gradient(#000000, #171717);
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
  padding: 20px 10%;

  @media (max-width: 1110px) {
    width: 100%;
    /* margin-top: 40px; */
  }
`;
export const SubTitle = styled.h1`
  margin-left: -20%;
  margin-right: 10%;
  /* margin-top: 20px; */
  height: 5rem;
  /* padding-top: -10px; */
  /* padding-bottom: -20%; */
  text-align: center;
  color: silver;
  text-shadow: 2px 2px 4px rgba(8, 2, 65, 0.5);
  background: linear-gradient(#75003a, #a30051);
  border-radius: 500px;
  /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
  font-size: 60px;

  @media (max-width: 1110px) {
    margin-left: -18%;
    padding-top: 25px;
    height: 6rem;
    width: 100%;
    padding-bottom: 20px;
    border-radius: 40px;
    font-size: 35px;
  }
`;
export const WorkList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: 50px;
`;
export const Work = styled.div`
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;
export const LayerImage = styled.img`
  width: 100%;
  border-radius: 10px;
  display: block;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Layer = styled.div`
  width: 100%;
  height: 0;
  background: linear-gradient(rgba(216, 192, 192, 0.6), #ff007f);
  border-radius: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  font-size: 14px;
  transition: height 0.5s;
  ${Work}:hover & {
    height: 100%;
  }
`;
export const LayerHeading = styled.h3`
  font-weight: 500;
  margin-bottom: 20px;
  color: white;
`;
export const LayerContent = styled.p`
  color: black;
  justify-content: center;
  /* text-align: justify; */
`;

export const Button = styled.button`
  font-size: 20px;
  display: block;
  width: fit-content;
  border: 2px;
  padding: 7px 10px;
  border-radius: 6px;
  text-decoration: none;
  /* background-color: #281c2d; */
  background: linear-gradient(#a30051, #ff2e96);
  color: #fff;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
  &:hover {
    background: linear-gradient(#a30051, #ff2e96, #a30051);
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  /* margin-left: -10%; */
  margin-top: 20px;
  display: flex;
  gap: 30px;
  @media (max-width: 1110px) {
    margin-top: 5%;
    margin-left: 2%;
  }
`;

export const ImageSliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(silver, #171717);

  @media (max-width: 1110px) {
    height: 50vh;
    padding-bottom: 5%;
  }
`;

export const changeImage = keyframes`
  0%{
    background-image:url(${imgslider1});
  }
  25%{
    background-image:url(${imgslider2});
  }
  50%{
    background-image:url(${imgslider3});
  }
  75%{
    background-image:url(${imgslider4});
  }
  100%{
    background-image:url(${imgslider1});
  }
  `;
export const ImageSlider = styled.div`
  border-radius: 10px;
  width: 94%;
  height: 90vh;
  display: grid;
  background-image: url(${imgslider1});
  background-size: 100% 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  animation: ${changeImage} 20s linear infinite;

  @media (max-width: 1110px) {
    height: 350px;
  }
`;

export const SpecialitiesContent = styled.p`
  width: 60%;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  text-align: justify;
  margin-bottom: 5%;

  @media (max-width: 1110px) {
    width: 100%;
    justify-content: center;
    margin-top: 15px;
    text-align: justify;
  }
`;

export const SpecialitiesHeading = styled.h2`
  /* margin-top: 0; */
  font-size: 50px;
  display: flex;
  flex-direction: column;
  > strong {
    font-size: 70px;
    color: #d10068;
    margin-left: 10%;
  }
  @media (max-width: 1110px) {
    width: 100%;
    align-items: center;
    justify-content: center;

    > strong {
      text-align: center;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      margin-left: 5%;
    }
  }
`;
export const SpecialitiesContainer = styled.div`
  background: linear-gradient(white, silver);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 15px 5%;

  @media (max-width: 1110px) {
    padding: 0 5%;
    width: 100%;
    gap: 0;
    margin-top: 0;
    flex-direction: column;
  }
`;

export const WhyUsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  @media (max-width: 1110px) {
    width: 100%;
    gap: 0;
    margin-top: 40px;
    flex-direction: column;
  }
`;

export const WhyUsHeading = styled.h2`
  font-size: 50px;
  > strong {
    font-size: 70px;
    color: silver;
  }
  @media (max-width: 1110px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    > strong {
      font-size: 60px;
    }
  }
`;

export const WhyUsContent = styled.p`
  width: 60%;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  text-align: justify;
  color: silver;

  @media (max-width: 1110px) {
    width: 100%;
    justify-content: center;
    margin-top: 15px;
    text-align: justify;
  }
`;

export const AnotherSubTitle = styled.h1`
  margin-left: 22%;
  margin-right: -10%;
  /* margin-top: 20px; */
  height: 5rem;
  /* padding-top: -10px; */
  /* padding-bottom: -20%; */
  text-align: center;
  color: silver;
  text-shadow: 2px 2px 4px rgba(8, 2, 65, 0.5);
  background: linear-gradient(#75003a, #a30051);
  border-radius: 500px;
  /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
  font-size: 60px;

  @media (max-width: 1110px) {
    margin-right: -5%;
    margin-left: 8%;
    padding-top: 25px;
    height: 6rem;
    width: 100%;
    padding-bottom: 20px;
    border-radius: 40px;
    font-size: 35px;
  }
`;
