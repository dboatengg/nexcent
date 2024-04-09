import data from '../data/heroData'
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "../styles/hero.css";
import { Pagination } from 'swiper/modules';

import { Button, Flex, Heading, Text } from '@chakra-ui/react';

import heroImg from '../assets/hero-image.svg'

export default function Hero() {
    const swiperOptions = {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {clickable:true},
        modules:[Pagination]
      };

  return (
    <>
      <Swiper {...swiperOptions}  >
      {data.map((item) => (
          <SwiperSlide style={{background:'#F5F7FA'}} key={item.id}>
            <Flex p="20px" maxWidth="1200px" alignItems={{base:'center'}} flexDirection={{base:'column-reverse',md:'row'}} mx="auto" gap="50px">
              <Flex flexDirection='column' alignItems={{base:'center', md:'flex-start'}} justifyContent="center" gap="15px">
                <Heading fontSize={{base:'40px',md:'50px'}} textAlign={{base:'center',md:'left'}}>{item.heading}</Heading>
                <Text textAlign={{base:'center',md:'left'}}>{item.text}</Text>
                <Button variant="primary">{item.btnText}</Button>
              </Flex>
              <div className="image-wrapper">
                <img className="hero-image" src={heroImg} alt="Hero" />
              </div>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
