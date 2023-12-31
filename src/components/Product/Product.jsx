import './Product.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    const { name, price, img, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="Image does not found" />
            <div className='product-item'>
                <h2 className='product-name'>{name}</h2>
                <p className='price'>Price : ${price}</p>
                <p className='manufacturer'>Manufacturer :{seller}</p>
                <p className='rating'>Ratings: {ratings} Star</p>
            </div>
            <button className='cart-btn' onClick={() => handleAddToCart(props.product)} >Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object.isRequired,
};
export default Product;