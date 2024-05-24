import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Col, Divider, Row, Grid } from 'antd';
const { Meta } = Card;
import { Card } from 'antd';
import { getAllData } from '../../service';
import { CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import {Helmet} from "react-helmet";
import DetailPage from '../DetailPage';


const Home = () => {
const [product, setProduct] = useState([])
useEffect(() => { 
  getAllData().then(res=>{
    setProduct(res.data.data)
  })
}, [])


  return (
   <>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Florist</title>
                <link rel="icon" type="image/svg+xml" href="https://img.freepik.com/free-psd/3d-pink-flower-isolated-transparent-background_191095-16624.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_user" />
            </Helmet>

    <div id='slider'>
        <div className="slider">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="https://preview.colorlib.com/theme/florist/img/hero/hero-2.jpg" alt="" />
       <div className="container">
       <div className="text">
            <p>Fresh Flower Gift Shop</p>
            <h1>Makin beautiful flowers <br /> a part of your life.</h1>
            <button className='btn-shp'>SHOP NOW</button>
          </div></div></SwiperSlide>
        <SwiperSlide><img src="https://preview.colorlib.com/theme/florist/img/hero/hero-1.jpg" alt="" />
        <div className="text">
            <p>Fresh Flower Gift Shop</p>
            <h1>Makin beautiful flowers <br /> a part of your life.</h1>
            <button className='btn-shp'>SHOP NOW</button>
          </div></SwiperSlide>
      </Swiper>
        </div>
       
    </div>

    <div id='boxs'>
      <div className="container">
        <div className="boxs">
          <div className="box1">
            <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png" alt="" />
           <div className="box-text">
           <h4>100% Freshness</h4>
            <p>Most people are unaware of the <br /> less common flower</p>
           </div>
          </div>

          <div className="box1">
            <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png" alt="" />
           <div className="box-text">
           <h4>Made by artist</h4>
            <p>Most people are unaware of the <br /> less common flower</p>
           </div>
          </div>

          <div className="box1">
            <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png" alt="" />
           <div className="box-text">
           <h4>Own courier</h4>
            <p>Most people are unaware of the <br /> less common flower</p>
           </div>
          </div>

          <div className="box1">
            <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png" alt="" />
           <div className="box-text">
           <h4>100% Freshness</h4>
            <p>Most people are unaware of the <br /> less common flower</p>
           </div>
          </div>
        </div>
      </div>
    </div>

    <div id='new-arrivals'>
      <div className="container">
        <div className="new-arrivals">
          <p>OUR FLOWER</p>
          <h3>New Arrivals</h3>

          <Row gutter={(18,19)}>
     {
      product && product.map((p)=>{
        return(
          <Col className="gutter-row" xs={24} md={12} xl={6}>
  
          <Card className='card'
      hoverable 
      style={{
        width: 250,
      }}
      cover={<img alt="example" src={p.img}/>}
    >
      <Meta title={p.title} description={p.price} />
      <button className='btn-add'>Details</button>
  <i className='heart'><CiHeart /></i>

    </Card>
          
        </Col>
        )
      })
     }
     
    </Row>
        </div>
      </div>
    </div>


    <div id='flower-child'>
      <div className="container">
        <div className="flower-child">
        <div className="text-child">
        <p>CUSTOM FLOWER</p>
          <h3>Let our flowers make <br /> your party more perfect.</h3>
          <button className='btn-order'>ORDER NOW</button>
          <button className='btn-contact'>CONTACT US</button>
        </div>
        </div>
      </div>
    </div>


    <div id='no-img'>
      <div className="container">
        <div className="no-img">
          <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt="" />
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae veritatis nisi aut illo itaque distinctio id excepturi, voluptatibus minima sed ut libero totam quisquam quis expedita iste dolor quasi porro optio inventore quam ratione odit!
          </h4>
          <h3>Alejandro Houston</h3>
          <p>BUSSNIES</p>
        </div>
      </div>
    </div>


    <div id='footer-top'>
      <div className="container">
        <div className="footer-top">
          <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
          <p>The floristry business has a significant market in the corporate and social event world, as <br /> flowers</p>
          <div className="icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Home