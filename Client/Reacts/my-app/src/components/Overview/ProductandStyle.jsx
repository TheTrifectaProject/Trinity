import react from 'react'
import {useState} from 'react'
import styled from "styled-components"


const NameStyleDIV = styled.div`
display:flex:
flex-direction:column;
width: 45%;
margin-left: 20px;
padding-left: 20px;
box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.2);
`
const TopDIV = styled.div`
display:contents;
height: 25%;
width: 100%;
`
const MidDIV = styled.div`
display:flex;
flex-direction: column;
padding-bottom: 10px;
margin-bottom: 100px;
height: 25%;
width: 100%;
`
const BottomDIV = styled.div`
height: 25%;
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
margin-bottom: -80px;
`

const CheckoutDIV = styled.div`
height: 25%;
width: 100%;
display: grid;
`
const StylesDIV = styled.div`
padding-left: 60px;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
`

const Styleimg = styled.img`
border: 1px solid black;
height:56%;
width: 35%;
border-radius: 50%;
margin-bottom: 15px;
box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .4);
&:hover {
  box-shadow: 0 0 20px 10px rgba(94, 137, 255, 0.655);
  cursor: pointer;
    }
`

  const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #000000;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    background-color: grey;
  cursor: pointer;

    }
`;

const AddtoBagBtn = styled.button`
  width: 90%;
  height: 55px;
  margin-left:25px;
  font-size: 25px;
  &:hover {
    background-color: #09a709b3;
    color:white;
    cursor: pointer;
    font-size: 30px;
    }
`


const ProductandStyle = ({currentProduct, currentStyle, setcurrentStyle, setPhotos, styles, updateMainPhoto, setphotoIndex}) => {

  // const skuObj = Object.values(currentStyle.skus);
  const [SizesisOpen, setSizesIsOpen] = useState(false);
  const [QuantisOpen, setQuantIsOpen] = useState(false);
  const [skus , setSkus] = useState([]);



  const styleClick = (style) => {
    setcurrentStyle(style);
    setPhotos(style.photos)
    updateMainPhoto(style.photos[0], 0)
    setSkus(Object.values(style.skus))
  }

  const toggleSizes = () => setSizesIsOpen(!SizesisOpen);
  const toggleQuant = () => setQuantIsOpen(!QuantisOpen);



if (!styles) {
  return null;
}
  return (
    <NameStyleDIV>
      <TopDIV>
        <h3>⭐️⭐️⭐️⭐️⭐️</h3>
        <h5><em>{currentProduct.category}</em></h5>
        <h1>{currentProduct.name}</h1>
        <h5><em>${currentStyle.original_price}</em></h5>
      </TopDIV>
      <MidDIV>
        <h2>Style Selector</h2>
        <StylesDIV>
          {styles.map((style) => {
            return (
               <Styleimg onClick={() => {styleClick(style)}} src={style.photos[0].thumbnail_url}/>
            )
          })}
        </StylesDIV>
      </MidDIV>
      <BottomDIV>
        <DropDownContainer>
          <DropDownHeader onClick={toggleSizes}>Sizes</DropDownHeader>
          {SizesisOpen && (
            <DropDownListContainer>
              <DropDownList>
                {skus.map((sku) => {
                  return (
                    <ListItem>{sku.size}</ListItem>
                  )
                })}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>

        <DropDownContainer>
          <DropDownHeader onClick={toggleQuant}>Quantity</DropDownHeader>
          {QuantisOpen && (
            <DropDownListContainer>
              <DropDownList>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </BottomDIV>
        {(!QuantisOpen && !SizesisOpen) && (
      <CheckoutDIV>
        <AddtoBagBtn>Add To Bag</AddtoBagBtn>
      </CheckoutDIV>
        )}

    </NameStyleDIV>
  )
}

export default ProductandStyle;