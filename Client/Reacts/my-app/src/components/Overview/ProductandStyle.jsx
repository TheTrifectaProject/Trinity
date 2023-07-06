import react from 'react'
import {useState, useEffect} from 'react'
import styled from "styled-components"
import Stars from "./Stars.jsx"


const NameStyleDIV = styled.div`
display:flex:
flex-direction:column;
overflow-y: scroll;
height:89.9%;
width: 45%;
margin-top: 35px;
margin-right: 5px;
margin-right: 33px;
`
const TopDIV = styled.div`
display:contents;
height: 50px;
width: 100%;
`
const MidDIV = styled.div`
display:flex;
flex-direction: column;
margin-bottom: 110px;
height: 210px;
width: 100%;
`
const CurrentStyle = styled.h4`
border-bottom: 2mm ridge rgba(162, 188, 206, 0.6);
margin-top: -10px;
width:10%;
`
const BottomDIV = styled.div`
height:50px;
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
margin-bottom: 14px;
`

const CheckoutDIV = styled.div`
height: 50px;
width: 100%;
display: grid;
margin-bottom: 75px;
`
const StylesDIV = styled.div`
padding-left: 30px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

const Styleimg = styled.img`
border: 1px solid black;
height: 60px;
width: 55px;
border-radius: 50%;
margin-bottom: 15px;
box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .4);
`
const Currentstyleimg = styled.img`
border: 1px solid rgb(10, 158, 250);
height: 60px;
width: 55px;
border-radius: 50%;
margin-bottom: 15px;
box-shadow: 10px 10px 10px 0 rgb(10, 158, 250);
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
height 150px;
`

const DropDownList = styled("ul")`
  padding: 0;
  padding-left: 1em;
  background: #f3f3f3;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #1b3546;
  font-size: 12px;
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
  width:  78%;
  height: 59px;
  font-size: 21px;
  color:white;
  background-color: #000000;
  border-radius:35px;
  margin-left: 50px;
  margin-bottom: 20px;
  &:hover {
    background-color: #969696c8;
    cursor: pointer;
    font-size: 24px;
    }
`
const FavoriteBtn = styled.button`
  width:  78%;
  height: 59px;
  font-size: 21px;
  border-radius:35px;
  margin-left: 50px;
  margin-bottom: 20px;
  &:hover {
    background-color: #ac154c57;
    cursor: pointer;
    font-size: 24px;
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
      <NameStyleDIV data-testid="NameStyleDIV">
        {!currentStyle.sale_price ?
       <TopDIV data-testid="TopDIV">

          <Stars ratingsData={ratingsData} />
          <h5><em>{currentProduct.category}</em></h5>
          <h1>{currentProduct.name}</h1>
          <h5><em>${currentStyle.original_price}</em></h5>

      </TopDIV> :
      <TopDIV>

          <Stars ratingsData={ratingsData} />
          <h5><em>{currentProduct.category}</em></h5>
          <h1>{currentProduct.name}</h1>

          <PriceDIV>
            <h5><em>${currentStyle.sale_price}</em></h5>
            <Strikeprice><em>${currentStyle.original_price}</em></Strikeprice>
            <Discount>sale price</Discount>
          </PriceDIV>

      </TopDIV>
      }

      <MidDIV data-testid="MidDIV">
        <h2>Style Selector</h2>
        <CurrentStyle><em>{currentStyle.name.split(" ").join()}</em></CurrentStyle>
        <StylesDIV>
          {styles.map((style) => {
            if (style !== currentStyle) {
             return (
               <Styleimg onClick={() => {styleClick(style)}} src={style.photos[0].thumbnail_url}/>
            )
            } else {
              return (
                <Currentstyleimg onClick={() => {styleClick(style)}} src={style.photos[0].thumbnail_url} />
              )
            }
          })}
        </StylesDIV>
      </MidDIV>
      <BottomDIV data-testid="BottomDIV">
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
        <FavoriteBtn>Favorite ❤️</FavoriteBtn>
        <h2>{currentProduct.slogan}</h2>
        <p> ~ {currentProduct.description} ~ </p>
      </CheckoutDIV>
        )}
    </NameStyleDIV>
  )
}

export default ProductandStyle;

