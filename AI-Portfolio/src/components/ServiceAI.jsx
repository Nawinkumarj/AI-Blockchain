import React, { useEffect, useState } from 'react';
import serviceImg from "../assets/BFC LOGO.png"

const FlipCard = ({ firstImage, secondImage, title, description, subtitle, link,servImage }) => {
  const [bgImage1, setBgImage1] = useState('');
  const [bgImage2, setBgImage2] = useState('');

  useEffect(() => {
    // Set the background images when component mounts
    setBgImage1(firstImage);
    setBgImage2(secondImage);
  }, [firstImage, secondImage]);

  return (
    <div className="square-flip">
    <div className="square" style={{ backgroundImage: `url(${bgImage1})` }}>
      <div className="square-container">
        <div className="align-center">
          <img src="http://titanicthemes.com/files/flipbox/kallyas2.png" className="boxshadow" alt="" />
        </div>
        <img className='serv-img' src={`${servImage}`} alt="Service" />

        <h2 className="textshadow">{title}</h2>
        
      </div>
      <div className="flip-overlay"></div>
    </div>
    <div className="square2" style={{ backgroundImage: `url(${bgImage2})` }}>
      <div className="square-container2">
        <div className="align-center"></div>
        <h3 className="textshadow">{description}</h3>
          <h2 className="textshadow">{subtitle}</h2>
       
      </div>
      <div className="flip-overlay"></div>
    </div>
  </div>
  );
};



const AI = () => {
  return (
    <div className='website-main'>
         <div className='website-head'>
            <h1>AI</h1>
        </div>
    <div className="centerflipcards">
       
    <FlipCard
        firstImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        secondImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        title="Kallyas Wp Theme"
        servImage={serviceImg}
        description="The #1 Selling Most Enjoyable and Creative Multipurpose WordPress theme."
        subtitle="#1 Front-end Visual Website Builder in 2016"
      />
      <FlipCard
        firstImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        secondImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        title="Kallyas Wp Theme"
        servImage={serviceImg}
        description="The #1 Selling Most Enjoyable and Creative Multipurpose WordPress theme."
        subtitle="#1 Front-end Visual Website Builder in 2016"
      />
     <FlipCard
        firstImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        secondImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        title="Kallyas Wp Theme"
        servImage={serviceImg}
        description="The #1 Selling Most Enjoyable and Creative Multipurpose WordPress theme."
        subtitle="#1 Front-end Visual Website Builder in 2016"
      />
       
      <div className="clearfix"></div>
     
    </div>
    </div>
  )
}

export default AI