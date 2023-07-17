import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackGround,
  IntroContainer,
  Text,
  MobileText,
  TabletText,
  Introduction,
  Image,
  ImageGallery,
  ImgCart,
  Row,
  Column,
  Img,
  Portfolio,
  Container,
  SubTitle,
  WorkList,
  Work,
  LayerImage,
  Layer,
  LayerHeading,
  LayerContent,
  Button,
  ButtonContainer,
  ImageSliderContainer,
  ImageSlider,
  WhyUsContainer,
  WhyUsContent,
  WhyUsHeading,
  SpecialitiesContainer,
  SpecialitiesContent,
  SpecialitiesHeading,
  AnotherSubTitle,
  AnotherContainer,
} from "../styles/Home.style";
// import owner from "../assets/owner.jpg";
import bridalmakeup from "../assets/bridalmakeup.jpg";
import imageg1 from "../assets/imagegallery1.jpg";
import imageg2 from "../assets/imagegallery2.jpg";
import imageg3 from "../assets/bride.jpg";
import imageg4 from "../assets/imagegallery3_1.jpg";
import imageg5 from "../assets/imagegallery4.jpg";
import hairbonding from "../assets/hairbonding.jpg";
import hairstyling from "../assets/hairstyling.jpg";
// import styled, { css, keyframes } from "styled-components";
import Footer from "../components/Footer";
import Services_Home from "./Services_Home";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleServicesClick = () => {
    navigate("/services");
  };

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <BackGround />
        <IntroContainer>
          <Introduction>
            {isMobile && (
              <MobileText>
                <p>Elevate Your Beauty & Wellness Journey </p>
                <h4> at "Mauli Unisex Salon n Spa...!!!"</h4>
              </MobileText>
            )}
            {isTablet && (
              <TabletText>
                <p>
                  {" "}
                  Elevate Your Beauty <br /> & Wellness Journey{" "}
                </p>
                <h4> at "Mauli Unisex Salon n Spa...!!!"</h4>
              </TabletText>
            )}
            {!isMobile && !isTablet && (
              <Text>
                <p>
                  Elevate Your Beauty <br /> & Wellness Journey{" "}
                </p>
                <h4> at "Mauli Unisex Salon n Spa...!!!"</h4>
              </Text>
            )}
            <ButtonContainer>
              <Button onClick={handleContactClick}>Contact Us</Button>
              <Button onClick={handleServicesClick}>Services</Button>
            </ButtonContainer>
          </Introduction>
          <ImageGallery>
            <ImgCart>
              <Row>
                <Column>
                  <Img src={imageg4} />
                  <Img src={imageg3} />
                </Column>
                <Column id="mid-col">
                  <Img src={imageg1} />
                </Column>
                <Column>
                  <Img src={imageg2} />
                  <Img src={imageg5} />
                </Column>
              </Row>
            </ImgCart>
          </ImageGallery>
        </IntroContainer>
        <Services_Home />
        <Portfolio>
          <Container>
            <SubTitle>Our Specialities</SubTitle>
            <WorkList>
              <Work>
                <LayerImage src={bridalmakeup} />
                <Layer>
                  <LayerHeading>Bridal Makeup</LayerHeading>
                  <LayerContent>
                    Experience exceptional bridal makeup at Mauli Unisex Salon n
                    Spa. Our skilled team specializes in creating personalized
                    looks that enhance your natural beauty. Using high-quality
                    products and the latest techniques, we ensure you look
                    stunning on your special day. Trust us for flawless
                    complexion, captivating eyes, and the perfect finishing
                    touches.
                  </LayerContent>
                </Layer>
              </Work>
              <Work>
                <LayerImage src={hairbonding} />
                <Layer>
                  <LayerHeading>Hair Bonding</LayerHeading>
                  <LayerContent>
                    Achieve beautiful, voluminous hair with hair bonding at
                    Mauli Unisex Salon n Spa. Our expert stylists use
                    high-quality bonding materials to seamlessly blend and
                    attach hair extensions. Get instant length, thickness, and a
                    natural-looking finish that will leave you with stunning,
                    head-turning hair.
                  </LayerContent>
                </Layer>
              </Work>
              <Work>
                <LayerImage src={hairstyling} />
                <Layer id="layer">
                  <LayerHeading>Skin/Hair Styling</LayerHeading>
                  <LayerContent>
                    At Mauli Unisex Salon n Spa, we offer top-notch skin and
                    hair styling services. Our skilled professionals use
                    advanced techniques and premium products to create flawless
                    skin and trendy hairstyles. Whether you desire a radiant
                    complexion or a stunning hair makeover, trust us to enhance
                    your natural beauty with our expertise.
                  </LayerContent>
                </Layer>
              </Work>
            </WorkList>
            <WhyUsContainer>
              <WhyUsHeading>
                <strong>Why Us?</strong>
              </WhyUsHeading>
              <WhyUsContent>
                <b>YOU</b> should consider Mauli Unisex Salon and Spa for their
                beauty and wellness needs for several compelling reasons.
                Firstly, Mauli Unisex Salon and Spa boasts a team of highly
                skilled and experienced professionals who are passionate about
                delivering top-notch services. From haircuts and styling to
                rejuvenating facials and relaxing spa treatments, their experts
                are dedicated to providing personalized and exceptional
                experiences tailored to each customer's unique preferences and
                requirements. <b>Secondly</b>, Mauli Unisex Salon and Spa
                prioritizes the use of high-quality products and the latest
                techniques to ensure optimal results and{" "}
                <strong>customer satisfaction</strong>. They carefully select
                premium brands and employ advanced beauty and wellness practices
                to deliver outstanding outcomes that leave customers feeling
                rejuvenated and confident. Furthermore, Mauli Unisex Salon and
                Spa is committed to maintaining a clean, hygienic, and welcoming
                environment. They adhere to stringent sanitation standards and
                take every precaution to create a safe space for customers to
                enjoy their treatments comfortably. Additionally, Mauli Unisex
                Salon and Spa strive to offer a diverse range of services to
                cater to various beauty and wellness needs. Whether it's a
                trendy haircut, a pampering spa session, or professional makeup
                application for a special occasion, they have an extensive menu
                of options to choose from, ensuring that customers can find the
                perfect service to enhance their natural beauty and well-being.
              </WhyUsContent>
            </WhyUsContainer>
          </Container>
        </Portfolio>

        <AnotherSubTitle>Elevate Your Style</AnotherSubTitle>
        <SpecialitiesContainer>
          <SpecialitiesHeading>
            <strong>
              Hair Bonding
              <br /> First Time In Ichalkaranji
            </strong>
          </SpecialitiesHeading>
          <SpecialitiesContent>
            <b>1. Professional Expertise:</b> Our salon in the area has a team
            of highly skilled and experienced professionals who specialize in
            hair bonding treatments. They have extensive knowledge and expertise
            in the latest techniques and trends.
            <br /> <b>2. Customized Solutions:</b> We offer personalized
            consultations to understand your specific hair goals and concerns.
            Our experts will recommend and tailor the hair bonding treatment to
            meet your individual needs, whether it's adding length, volume, or
            addressing hair thinning. <br />
            <b>3. High-Quality Products:</b> We use premium-quality hair bonding
            products that are safe and reliable. These products ensure strong
            and long-lasting bonds, providing natural-looking results that blend
            seamlessly with your existing hair.
            <br />
            <b>4. Natural Appearance:</b> Our skilled professionals are adept at
            achieving a natural appearance with hair bonding. They carefully
            select and match the hair extensions or pieces to your hair color,
            texture, and style, ensuring a seamless blend. <br />
            <b>5. Long-Lasting Results:</b> Our hair bonding treatments are
            designed to provide long-lasting results. With proper care and
            maintenance, the bonded hair extensions or pieces can last for
            several months, allowing you to enjoy your desired hairstyle for an
            extended period.
            {/* <br /> <b>6. Versatile Styling Options:</b> Hair bonding opens up a
          world of styling possibilities. Whether you want to experiment with
          different hairstyles, create voluminous updos, or simply enhance your
          natural hair, the added length and volume from hair bonding provide
          versatility and flexibility in styling. <br />
          <b>7. Personalized Care and Attention:</b> At our salon, we prioritize
          the comfort and satisfaction of our clients. Our team provides
          personalized care and attention throughout the hair bonding process,
          ensuring that you feel relaxed, confident, and well-cared-for during
          your salon visit.
          <br /> <b>8. Positive Customer Experiences:</b> We have a track record
          of positive customer experiences and testimonials. Many clients have
          expressed their satisfaction with our hair bonding services, praising
          our attention to detail, professionalism, and the exceptional results
          they achieved. */}
          </SpecialitiesContent>
        </SpecialitiesContainer>

        <ImageSliderContainer>
          <ImageSlider />
        </ImageSliderContainer>
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
