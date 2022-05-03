import { Link } from 'react-router-dom';
import {
  CategoryBodyContainer,
  CategoryContainer,
  CategoryHeading,
  CategoryPara,
  BackgroundImage,
} from './category-item.styles.jsx';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <CategoryContainer>
      <BackgroundImage img={imageUrl} />
      <CategoryBodyContainer>
        <Link to={`/shop/${title}`}>
          <CategoryHeading>{title}</CategoryHeading>
        </Link>

        <CategoryPara>Shop Now</CategoryPara>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
