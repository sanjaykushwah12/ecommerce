
import { useState } from 'react';
import './App.css';
import Header from './component/layout/Header';
import Productlist from './component/Productlist';
import Cartlist from './component/Cartlist';
import Footer from './component/layout/Footer';

function App() {

const [product,setProduct]=useState([
  {
    url: 'images/shirt.jpg',
    name:'Men shirt',
    category:'Clothes',
    seller:'Proto Store',
    price: 2100
  },
  {
    url: 'images/shirt.jpg',
    name:'Men Shirt',
    category:'Clothes',
    seller:'Zara',
    price: 2199
  },
  {
    url: 'images/shirt.jpg',
    name:'Men shirt',
    category:'Clothes',
    seller:'Adarsh Store',
    price: 1750
  },
  {
    url: 'images/bat.jpg',
    name:'Cricket Bat',
    category:'Sports',
    seller:'Nitin Sports',
    price: 1499
  },
  {
    url: 'images/bat.jpg',
    name:'Cricket Bat',
    category:'Sports',
    seller:'Nitin Sports',
    price: 1499
  },
  {
    url: 'images/bat.jpg',
    name:'Cricket Bat',
    category:'Sports',
    seller:'Nitin Sports',
    price: 1499
  },


])

const [cart, setCart]=useState([])  
//console.log(cart)
const[showCart,setshowCart]=useState(false)

const addtocart = (data)=>{
 // console.log(data)
  setCart([...cart, {...data , quantity:1}])


}

const handleShow = (value)=>{
  setshowCart(value)

}
  return (
    <> 
   <Header count={cart.length} handleShow={handleShow}/>
   {
    showCart ?
    <Cartlist carts={cart}/>:
    <Productlist products={product} addTocart={addtocart}/>
   }
   <Footer/>
   
   </>
  );
}

export default App;
