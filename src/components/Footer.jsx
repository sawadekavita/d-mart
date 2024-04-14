import React from 'react'
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,IconList
} from './FooterStyle'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";




const Footer = () => {
  return (
    <Box>
    <FooterContainer>
      
      <h1 style={{fontSize:"40px", color:"white",fontWeight:"bold",fontFamily:"-moz-initial",marginLeft:"60px",marginBottom:"40px"}}>D-mart</h1>
        <Row>
            <Column>
            <Heading>TOP CATEGORIES</Heading>
            <FooterLink>Womens</FooterLink>
            <FooterLink>Mens</FooterLink>
            </Column>

            <Column>
            <Heading>HELP</Heading>
            <FooterLink>Delivry</FooterLink>
            <FooterLink>Track an order</FooterLink>
            <FooterLink>Secure payment</FooterLink>
            </Column>

            <Column>
            <Heading>ABOUT US </Heading>
            <FooterLink>Careers </FooterLink>
            <FooterLink>Terms and conditions</FooterLink>
            <FooterLink>privacy policy</FooterLink>
            <FooterLink>Responsibility</FooterLink>

            </Column>

            <Column>
            <Heading>OUR SERVICES</Heading>
            <FooterLink>Brands List</FooterLink>
            <FooterLink>Order</FooterLink>
            <FooterLink>Refund & Exchange</FooterLink>
            <FooterLink>Blog</FooterLink>

            </Column>
            <Column>
            <Heading>CONTACT US</Heading>
<IconList>
<FooterLink ><FaLinkedin style={{width:"35px", height:"35px"}} /></FooterLink>
            <FooterLink><FaFacebook style={{width:"35px", height:"35px"}}/></FooterLink>
            <FooterLink><FaTelegram style={{width:"35px", height:"35px"}}/></FooterLink>
            <FooterLink><FaWhatsappSquare style={{width:"35px", height:"35px"}}/></FooterLink>
            <FooterLink><FaYoutube style={{width:"35px", height:"35px"}}/></FooterLink>
</IconList>
           
            </Column>
        </Row>
    </FooterContainer>
    </Box>
  )
}

export default Footer