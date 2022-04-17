import './shop.css';
import shop from '../content/shop';
import { useContext, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';

const handleConfirmation = (name, seller, price, quantity) => {
  if (JSON.parse(localStorage.getItem('cart') === null)) {
    const order = [[name, seller, price, quantity]];
    localStorage.setItem('cart', JSON.stringify(order));
  } else {
    const previous = JSON.parse(localStorage.getItem('cart'));
    console.log(previous)
    previous.push([name, seller, price, quantity])
    localStorage.setItem('cart', JSON.stringify(previous));
  }
};

const Shop = () => {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState('');
  const [seller, setSeller] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('1');
  const { language } = useContext(MyContext);
  return (
    <div>
      <div className='shop-header'>
      <div className='shop-cart-icon'>{JSON.parse(localStorage.getItem('cart'))?.length > 0 ? (<Link to='/shop/cart'><BsCart2 /></Link>) : <BsCart2 />}<span className='shop-cart-value'>{JSON.parse(localStorage.getItem('cart'))?.length}</span></div>
      </div>
      <div className='shop-search'></div>
      <div className='shop-result'>
        {shop.map(one => (<div key={`${one.name}+${one.seller}`} className='shop-item'>
          <img className="shop-item-image" src={one.img !== "" ? one.img : "https://via.placeholder.com/150"} alt="shop-item" />
          <div className='shop-item-content'>
            <div className='shop-item-infos'>
              <ul>
                <li>{language === 'en' ? 'Name:' : 'Nom:'} {one.name}</li>
                <li>{language === 'en' ? 'Seller:' : 'Vendeur:'} {one.seller}</li>
                <li>{language === 'en' ? 'Price:' : 'Prix:'} {one.price}</li>
              </ul>
            </div>
            <div className='shop-item-button'>
              <button onClick={() => {setClicked(true); setName(one.name); setSeller(one.seller); setPrice(one.price); window.scrollTo(0, 0)}}>+</button>
            </div>
          </div>
        </div>))}
      </div>
      <div className={clicked ? 'shop-confirm' : 'hidden'}>
        <p>{language === 'en' ? 'Name:' : 'Nom:'} {name}</p>
        <p>{language === 'en' ? 'Seller:' : 'Vendeur:'} {seller}</p>
        <p>{language === 'en' ? 'Price:' : 'Prix:'} {price}</p>
        <div><p>{language === 'en' ? 'Quantity:' : 'Quantitée:'}</p><input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input></div>
        <button onClick={() => {handleConfirmation(name, seller, price, quantity); setClicked(false)}}>Confirm</button>
        <div className='shop-confirm-cross' onClick={() => setClicked(false)}></div>
      </div>
    </div>
  );
}

export default Shop;