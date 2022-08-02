import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

function Banner() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block"
          src="/vege1.jpg"
          width="100%"
          layout="responsive"
          height={40}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="fs-1 juduls">Sayuran Organik Segar</h1>
          <p className="fs-3 juduls">Selalu gunakan Sayuran Organik segar di setiap kondimen makananmu.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block"
          src="/vege2.jpg"
          width="100%"
          layout="responsive"
          height={40}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1 className="fs-1 juduls">Petani Lokal</h1>
          <p className="fs-3 juduls">Kami Selalu Bekerja sama dengan Petani lokal.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block"
          src="/vege3.jpg"
          width="100%"
          layout="responsive"
          height={40}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1 className="fs-1 juduls">Mewarnai kehidupanmu</h1>
          <p className="fs-3 juduls">Sayuran Organik segar selalu berdampingan dengan mu.</p>
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