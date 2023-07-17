import React from 'react'
import img1 from "../../assets/skin.avif"
import img2 from "../../assets/hairservices.jpg"
import img3 from "../../assets/bride.jpg"
import img4 from "../../assets/body1.jpg"
import "./../../styles/services/services.css"
import Services from '../services/services'
const Forher = () => {
  return (
    <div className='forher'>
      <Services/>
        <div >
      <h3 className='herhead' >SERVICES FOR HER</h3>
  </div>
       <div className='imgart'>
    <div className="row">
  <div className="column1">
  <div class="card" >
  <img src= {img2} alt="..."/>
  <div >
    <h5  >HAIR</h5>
    <p>We care about your hair. </p>
    <p >Having a stunning hairstyle can give you a confidence boost that you always wanted.Experience the ultimate hair rejuvenation with our luxurious hair treatments at Mauli Salon n Spa. Our skilled stylists use nourishing products and specialized techniques to repair, hydrate, and restore your hair's natural vitality.</p>
    <a href="/services/hair" class="btn btn-primary" >Go & Get</a>
  </div>
</div>
<div class="card" >
  <img src={img3} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5  >MAKEUP</h5>
    <p >Enhancing your appearance, boosting your confidence, and expressing your creativity. It's important to remember that makeup should be used as a complement to your natural beauty, and not as a way to hide or cover up who you are.</p>
    <a href="/services/makeup" class="btn btn-primary" >Go & Get</a>
  </div>
</div>
<div class="card" >
  <img src={img1} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5>SKIN</h5>
    <p >At Mauli Salon n Spa, we specialize in transforming your skin into a radiant and healthy complexion. Our range of skincare treatments includes facials, peels, and personalized skincare regimens. Our experienced estheticians use top-quality products and techniques to address your specific concerns, leaving you with glowing, youthful-looking skin.</p>
    <a href="/services/skin" class="btn btn-primary" >Go & Get</a>
  </div>
</div>
<div class="card" >
  <img src={img4} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title" >BODY</h5>
    <p class="card-text">At Mauli Salon n Spa, we offer a range of body treatments designed to relax, revive, and replenish your body. From soothing massages to invigorating body scrubs, our experienced therapists use high-quality products to nourish your skin and promote overall well-being. Immerse yourself in pure bliss at our tranquil spa sanctuary.</p>
    <a href="/services/body" class="btn btn-primary" >Go & Get</a>
  </div>
</div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Forher
