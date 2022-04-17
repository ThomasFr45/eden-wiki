import { useContext } from 'react';
import './cart.css';
import MyContext from '../context/MyContext';

const sortOrder = (order) => {
  const sorted = [];
  while (order[0]) {
    const seller = order[0][1];
    const tempOrder = order.filter(one => one[1] === seller);
    sorted.push([seller, tempOrder])
    console.log(sorted)
    order = order.filter(one => one[1] !== seller)
  }
  return sorted;
}

const Cart = () => {
  let order = JSON.parse(localStorage.getItem('cart'));
  const sorted = sortOrder(order);
  const { language } = useContext(MyContext);
  return (
    <div className='cart-container'>
      <div className='cart-orders'>
        {sorted.map(one => (
          <div className='cart-seller-container'>
            <h4>{language === 'en' ? 'Seller:' : 'Vendeur:'} {one[0]}</h4>
            <table>
              <thead>
                <tr>
                  <td>{language === 'en' ? 'Name' : 'Nom'}</td>
                  <td>{language === 'en' ? 'Quantity' : 'Quantitée'}</td>
                </tr>
              </thead>
              <tbody>
                {one[1].map(item => (
                  <tr>
                    <td>{item[0]}</td>
                    <td>{item[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <button className='cart-button' onClick={() => {localStorage.removeItem('cart'); window.location.replace("https://thomasfr45.github.io/eden-wiki/#/shop")}}>{language === 'en' ? 'Clear' : 'Vider'}</button>
      <div className='cart-text'>{language === 'en' ? 'Your order has been arranged in a way so that you can send it by in game mail to the corresponding seller.' : "Votre commande à été organisée de manière à ce que ce soit facile de l'envoyer aux vendeurs par mail in game."}</div>
    </div>
  );
}

export default Cart;