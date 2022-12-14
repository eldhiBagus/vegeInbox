import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import vege1 from '../public/vege1.jpg';
import vege2 from '../public/vege2.jpg';
import vege3 from '../public/vege3.jpg';

function Banner() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block"
          src={vege1}
          width="100%"
          layout="responsive"
          height={40}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="juduls">Sayuran Organik Segar</h2>
          <p className="juduls">Gunakan di setiap kondimen masakanmu</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block"
          src={vege2}
          width="100%"
          layout="responsive"
          height={40}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h2 className="juduls">Petani Lokal</h2>
          <p className="juduls">Kami Selalu Bekerja sama dengan Petani lokal.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block"
          src={vege3}
          width="100%"
          layout="responsive"
          height={40}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h2 className="juduls">Pilihan Tepat</h2>
          <p className="juduls">Sayuran Organik segar selalu berdampingan dengan mu.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <style jsx>{`
        .juduls {
          text-shadow: 1px 1px 2px black;
        }
      `}</style>
      </>
  );
}

export default Banner;