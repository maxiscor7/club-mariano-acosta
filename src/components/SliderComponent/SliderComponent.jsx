import boutique1 from '../../assets/boutique1.jpg';
import boutique2 from '../../assets/boutique2.jpg';
import boutique3 from '../../assets/boutique3.jpg';
import boutique4 from '../../assets/boutique4.jpg';
import boutique5 from '../../assets/boutique5.png';
import boutique6 from '../../assets/boutique6.png';
import boutique7 from '../../assets/boutique7.png';

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SliderComponent.css'

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function SliderComponent() {

  const [isExpanded, setIsExpanded] = useState({
    boutique1: false,
    boutique2: false,
    boutique3: false,
    boutique4: false,
    boutique5: false,
    boutique6: false,
    boutique7: false,
  });

  const toggleExpand = (boutique) => {
    setIsExpanded((prevState) => ({
      boutique1: boutique === 'boutique1' ? !prevState.boutique1 : false,
      boutique2: boutique === 'boutique2' ? !prevState.boutique2 : false,
      boutique3: boutique === 'boutique3' ? !prevState.boutique3 : false,
      boutique4: boutique === 'boutique4' ? !prevState.boutique4 : false,
      boutique5: boutique === 'boutique5' ? !prevState.boutique5 : false,
      boutique6: boutique === 'boutique6' ? !prevState.boutique6 : false,
      boutique7: boutique === 'boutique7' ? !prevState.boutique7 : false,
    }));
  };

  return (
    <div className='container-element-swiper'>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        effect={'coverflow'}
        grabCursor={true}
        initialSlide={3}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide onClick={() => toggleExpand('boutique1')} className={isExpanded.boutique1 ? 'expanded' : ''}>
        <img src={boutique1} alt="Boutique 1" />
      </SwiperSlide>
      <SwiperSlide onClick={() => toggleExpand('boutique2')} className={isExpanded.boutique2 ? 'expanded' : ''}>
        <img src={boutique2} alt="Boutique 2" />
      </SwiperSlide>
      <SwiperSlide onClick={() => toggleExpand('boutique3')} className={isExpanded.boutique3 ? 'expanded' : ''}>
        <img src={boutique3} alt="Boutique 3" />
      </SwiperSlide>
      <SwiperSlide onClick={() => toggleExpand('boutique4')} className={isExpanded.boutique4 ? 'expanded' : ''}>
        <img src={boutique4} alt="Boutique 4" />
      </SwiperSlide>
      <SwiperSlide onClick={() => toggleExpand('boutique5')} className={isExpanded.boutique5 ? 'expanded' : ''}>
        <img src={boutique5} alt="Boutique 5" />
      </SwiperSlide>
      <SwiperSlide onClick={() => toggleExpand('boutique6')} className={isExpanded.boutique6 ? 'expanded' : ''}>
        <img src={boutique6} alt="Boutique 6" />
      </SwiperSlide>
      <SwiperSlide onClick={() => toggleExpand('boutique7')} className={isExpanded.boutique7 ? 'expanded' : ''}>
        <img src={boutique7} alt="Boutique 7" />
      </SwiperSlide>
    </Swiper>
    
    </div>
  );
}
