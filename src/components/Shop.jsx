import './shop.css';
import shop from '../content/shop';

const Shop = () => {
  return (
    <div>
      <div className='shop-header'></div>
      <div className='shop-search'></div>
      <div className='shop-result'>
        {shop.map(one => (<div key={one.name} className='shop-item'>
          <img className="shop-item-image" src={one.img !== "" ? one.img : "https://via.placeholder.com/150"} alt="shop-item" />
          <div className='shop-item-content'>
            <div className='shop-item-infos'>
              <ul>
                <li>Name: {one.name}</li>
                <li>Seller: {one.seller}</li>
                <li>Price: {one.price}</li>
              </ul>
            </div>
            <div className='shop-item-button'>
              <button>+</button>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  );
}

export default Shop;