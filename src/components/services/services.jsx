import "../../styles/services/services.css";
import { motion } from "framer-motion";
import {
  Button,
  ButtonContainer,
} from "./../../styles/Home.style";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const MoveTOHer= () => {
    navigate("/services/her");
  };

  const MoveTOHim = () => {
    navigate("/services/him");
  };

  return (
    <>
      <motion.div
        className="back"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="serviceshead">
          <h1>SERVICES</h1>
        </div>
        <div className=" cardhead">
          <h2> What Our Magicians Can Do For You</h2>
        </div>
        <div className="cardhead">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut id
            voluptatum vel reprehenderit voluptate qui atque numquam nostrum.
            Omnis dicta aliquam fugit incidunt commodi vel dolorum repudiandae
            quas facere magni.
          </p>
        </div>

        <ButtonContainer className="btncont">
              <Button onClick ={MoveTOHer}className="btn">SERVICES FOR HER</Button>
              <Button onClick ={MoveTOHim} className="btn">SERVICES FOR HIM</Button>
            </ButtonContainer>
      </motion.div>
    </>
  );
};

export default Services;
