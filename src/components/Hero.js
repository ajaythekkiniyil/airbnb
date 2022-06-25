import React from 'react';
import GirdGallery from '../images/gird-gallery.png'

function Hero() {
  return <div className='hero'>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mt-md-5">
              <h3 className='mt-md-5'>Online Experience Fell free</h3>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                used to demonstrate the visual form of a document or a typeface without 
                relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
              </p>
          </div>
          <div className="col-md-8">
          <img src={GirdGallery} alt='girdgallery' className='girdgallery' width='100%'/>
          </div>
        </div>
      </div>
  </div>;
}

export default Hero;
