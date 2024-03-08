import Carousel from 'react-bootstrap/Carousel';

export default function Carrossel({img1, descricao1, img2, descricao2, img3, descricao3}) {
  return (
    <Carousel data-bs-interval="300" data-bs-theme="dark" style={{height:'60%', marginTop:'3%'}}>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={img1}
          alt={descricao1}
          style={{height:'350px', width:'auto'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={img2}
          alt="Second slide"
          style={{height:'350px', width:'auto'}}
        />
        <br/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={img3}
          alt="Third slide"
          style={{height:'350px', width:'auto'}}
        />
      </Carousel.Item>
    </Carousel>
  );
}

