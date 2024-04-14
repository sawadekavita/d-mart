import styled from "styled-components"
 
export const Box = styled.div`
width : 100%;
padding: 1% 2.5%;

background:#ffad33;
text:black;
@media(max-width:1000px){

}
`;

export const FooterContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
max-width:1200px;
margin: 0 auto;
`;

export const Row =styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(185px,1fr));
grid-gap:20px;
@media(max-width:1000px){
    grid-template-columns:repeat(auto-fill,minmax(200px,1fr))
}
`;

export const Column = styled.div`
display: flex;
flex-direction :column;
text-align:left;
margin-left:60px
`;

export const FooterLink =styled.a`
color:#fff;
font-size:20px;
margin-bottom:20px;
text-decoration:none;

&:hover{
    color:black;
}
`;

export const Heading =styled.p`
font-size:20px;
color:#fff;
margin-bottom:40px;
font-weight:bold;
color:black
`
export const IconList = styled.div`
display:flex;
gap:20px
`