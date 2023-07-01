import react from 'react'
import {useState, useEffect} from 'react'
import styled from "styled-components"
import Stars from "./Stars.jsx"


const NameStyleDIV = styled.div`
display:flex:
flex-direction:column;
width: 45%;
margin-left: 20px;
margin-right: 5px;
padding-left: 20px;
box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.2);
background-color: #fffcfc;
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
height:60%;
width: 41%;
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

const DropDownListContainer = styled("div")`
overflow-y: auto;
height 150px;`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #f3f3f3;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #1b3546;
  font-size: 27px;
  font-weight: 100;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const Listsizes = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    background-color: #3faffa;
  cursor: pointer;
    }
`;

const Listquant = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    background-color: #3faffa;
  cursor: pointer;
    }
`;

const AddtoBagBtn = styled.button`
  width: 90%;
  height: 55px;
  margin-left:25px;
  font-size: 25px;
  background-color: #db1b1b39;
  &:hover {
    background-color: #09a709b3;
    color:white;
    cursor: pointer;
    font-size: 30px;
    }
`
const PriceDIV = styled.div`
  display:flex;
  flex-direction: row;
  margin-top -22px;
`
const Strikeprice = styled.h5`
  text-decoration: line-through;
  color: red;
  margin-right: 10px;
`
const Price = styled.h5`
`
const Discount = styled.h3`
  color:green;
  margin-left: 10px;
`

const ProductandStyle = ({currentProduct, currentStyle, setcurrentStyle, setPhotos, styles, updateMainPhoto, setphotoIndex, ratingsData}) => {

  // const skuObj = Object.values(currentStyle.skus);
  const [SizesisOpen, setSizesIsOpen] = useState(false);
  const [QuantisOpen, setQuantIsOpen] = useState(false);
  const [skus , setSkus] = useState([]);
  const [size, setSize] = useState('');
  const [sizeQuant, setsizeQuant] = useState('')




  const styleClick = (style) => {
    setcurrentStyle(style);
    setPhotos(style.photos)
    updateMainPhoto(style.photos[0], 0)

    setSkus(Object.values(style.skus))
  }
  const sizeClick = (size) => {
    setSize(size)
    toggleSizes();
  }

  const quantClick = (quant) => {
    setsizeQuant({'Name': currentStyle.name, 'size':size, 'Quantity':quant, 'Style':currentStyle.style_id})
    toggleQuant();
  }

  const addToBagClick = () => {
    console.log(sizeQuant);
  }
  const toggleSizes = () => setSizesIsOpen(!SizesisOpen);
  const toggleQuant = () => setQuantIsOpen(!QuantisOpen);

const sizesArr = [1,2,3,4];

if (!styles || !ratingsData) {
  return null;
}

    return (
      <NameStyleDIV>
        {!currentStyle.sale_price ?
       <TopDIV>

          <Stars ratingsData={ratingsData} />
          <h1>{currentProduct.name}</h1>
          <h5><em>{currentProduct.category}</em></h5>
          <h5><em>${currentStyle.original_price}</em></h5>

      </TopDIV> :
      <TopDIV>

          <Stars ratingsData={ratingsData} />
          <h1>{currentProduct.name}</h1>
          <h5><em>{currentProduct.category}</em></h5>
          <PriceDIV>
            <Strikeprice><em>${currentStyle.original_price}</em></Strikeprice>
            <h5><em>${currentStyle.sale_price}</em></h5>
            <Discount>sale price</Discount>
          </PriceDIV>

      </TopDIV>
      }

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
                    <Listsizes onClick={() => {sizeClick(sku.size)}}>{sku.size}</Listsizes>
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
                {sizesArr.map((el) => {
                  return (
                    <Listquant onClick={() => {quantClick(el)}}>{el}</Listquant>
                  )
                })}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </BottomDIV>
        {(!QuantisOpen && !SizesisOpen) && (
      <CheckoutDIV>
        <AddtoBagBtn onClick={addToBagClick}>Add To Bag</AddtoBagBtn>
      </CheckoutDIV>
        )}

    </NameStyleDIV>
  )
}

export default ProductandStyle;



