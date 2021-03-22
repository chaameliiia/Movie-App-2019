import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 0,
    name: '김치',
    image: 'http://m.gochoochongak.com/web/product/big/201810/1cf1eb74d9cbb972ee0fd10d7f25e49c.jpg',
    rating: 5,
  },
  {
    id: 1,
    name: '삼겹살',
    image: 'https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG',
    rating: 5,
  },
  {
    id: 2,
    name: '쭈꾸미',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: '떡볶이',
    image: 'https://img.siksinhot.com/article/1459486160858057.jpeg',
    rating: 3.8,
  },
  {
    id: 4,
    name: '김밥',
    image: 'https://www.gyeongju.go.kr/upload/content/thumb/20200506/9DD6ED74C34C4B0B9FA0BA67F49C3BEE.jpg',
    rating: 4,
  },
];

function Food({ name, url, rating }) {
  return (
    <>
      <h2>i like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={url} alt={name} />
    </>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

// function renderFood(dish) {
//   return (<Food name={dish.name} url={dish.image} />)
// }

function App() {
  return (
    <div>
      <h1>hello</h1>
      {foodILike.map((n) => {
        return <Food key={n.id} name={n.name} url={n.image} rating={n.rating} />;
      })}
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;