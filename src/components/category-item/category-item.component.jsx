import { Link } from 'react-router-dom';
import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='category-container-main'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <Link to={`/shop/${title}`}>
          <h2>{title}</h2>
        </Link>

        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
