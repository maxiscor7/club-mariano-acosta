import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sponsor1 from "../assets/sponsor1.png"
import sponsor2 from "../assets/sponsor2.png"
import sponsor3 from "../assets/sponsor3.png"
import sponsor4 from "../assets/sponsor4.png"
import sponsor5 from "../assets/sponsor5.png"
import sponsor6 from "../assets/sponsor6.png"
import sponsor7 from "../assets/sponsor7.png"

export default function CarouselSponsors() {

  const images = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,           // Agregado para movimiento automático
    autoplaySpeed: 3000,      // Velocidad de movimiento automático en milisegundos
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    adaptiveHeight: true,
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: '1400px', padding: '0 20px', marginBottom: '50px', }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img
              src={image}
              alt={`sponsor-${index + 1}`}
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', margin: '0 auto' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );

}