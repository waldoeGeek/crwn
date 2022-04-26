import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className='cart-item-container' key={Math.random()}>
      <img
        src={imageUrl}
        alt={name}
        className='item-image'
        style={{ width: '80px' }}
      />
      <div className='item-details'>
        <h2 className='name'>{name}</h2>
        <span className='item-quantity'>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
