import React from "react";
import WSPGallery from "./WSPGallery";
import Footer from "./Footer";
import { motion } from "framer-motion";

const galleryImages = [
  {
    img: "https://i.pinimg.com/564x/b7/7e/a4/b77ea4b81fe8d1feddd735cd04520207.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/9b/f8/49/9bf849f11b2242ecd5dae13dc63a6218.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/95/14/da/9514dace6d11b7a05ecbf966ff191dd8.jpg",
  },
  {
    img: "https://i.pinimg.com/736x/20/83/0c/20830c201f99b2615e61d54a7d48c702.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/20/98/35/2098355f044deeee8657addfc162d308.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/6e/29/c4/6e29c47fb06ca47a5c34c42442a78c54.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/f4/df/e8/f4dfe8689715ab7620ad66001953a911.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/cc/9b/91/cc9b914fdb943be29df75211a1323561.jpg",
  },
  {
    img: "https://i.pinimg.com/736x/6e/50/67/6e506748d4c5a50801da9b09d264b789.jpg",
  },
];

export default function Gallery() {
  return (
    <>
      <div className="title"></div>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <br />
        <div style={{ marginTop: "100px" }}>
          <strong>
            <h1 style={{ color: "#D10068" }}>ELEVATE Your style with Us</h1>
          </strong>
        </div>
        <br />
        <br />

        <WSPGallery galleryImages={galleryImages} />

        <br />
        <br />
        <div>Mauli Salon</div>
      </motion.div>
      <Footer />
    </>
  );
}
