import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const catLinks = (category) => {
  if (category === 'hats') {
    return ['jackets', 'sneakers', 'womens', 'mens'];
  } else if (category === 'jackets') {
    return ['hats', 'sneakers', 'womens', 'mens'];
  } else if (category === 'sneakers') {
    return ['hats', 'jackets', 'womens', 'mens'];
  } else if (category === 'womens') {
    return ['hats', 'jackets', 'sneakers', 'mens'];
  } else if (category === 'mens') {
    return ['hats', 'jackets', 'sneakers', 'womens'];
  }
};

const GetCategoryLinks = ({ category }) => {
  const categoryLinks = catLinks(category);
  //   console.log(`array: ${categoryLinks}`);
  return (
    <Fragment>
      {categoryLinks.map((item, idx) => {
        return (
          <Link to={`/shop/${item}`}>
            <Fragment key={Math.random()}>
              <h3
                style={{
                  animation: `fade 1.${idx}s ease-in-out`,
                }}
              >
                {item}
              </h3>
            </Fragment>
          </Link>
        );
      })}
    </Fragment>
  );
};

export default GetCategoryLinks;