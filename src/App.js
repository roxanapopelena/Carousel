import Carousel, { CarouselItem } from "./components/Carousel";
import "./components/Carousel.css";

export default function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem>
          <div className='carousel_img_container'>
            <img className='carousel_img' src='https://i.pinimg.com/originals/f5/25/6f/f5256f22b9dea5d4eb80c41f91f87793.jpg'></img>
          </div>
          </CarouselItem>
        <CarouselItem>
          <div className='carousel_img_container'>
            <img className='carousel_img' src='https://wallpaperaccess.com/full/508751.jpg'></img>
          </div>
          </CarouselItem>
        <CarouselItem>
          <div className='carousel_img_container'>
            <img className='carousel_img' src='https://i.pinimg.com/originals/19/6f/01/196f017f2c5392b3554c37e974e71abb.jpg'></img>
          </div>
          </CarouselItem>
      </Carousel>
    </div>
  );
}
