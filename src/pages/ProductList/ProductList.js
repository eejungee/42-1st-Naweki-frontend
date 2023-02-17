import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Aside from './Aside/Aside';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import { CATEGORY_DATA } from './Aside/data/categoryData';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const location = useLocation();
  const category = location.search;
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get('limit');
  const page = searchParams.get('page');

  // TODO: mock data 사용 시
  // useEffect(() => {
  //   fetch('./data/productData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts(data);
  //     });
  // }, []);

  // TODO: api 연결 시
  // useEffect(() => {
  //   fetch(
  //     `http://10.58.52.114:3000/products${category}?page=${page}&limit=${limit}`,
  //     {
  //       method: 'GET',
  //     }
  //   )
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setProducts(data.data);
  //       setPosts(data);
  //     });
  // }, [page, limit, category]);

  useEffect(() => {
<<<<<<< HEAD
    fetch(
      `http://10.58.52.114:3000/products${category}?page=${page}&limit=${limit}`,
      {
        method: 'GET',
      }
    )
=======
    fetch('http://10.58.52.114:3000/products', {
      method: 'GET',
    })
>>>>>>> main
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProducts(data.data);
        setPosts(data);
      });
  }, [page, limit, category]);

  const onClickFilter = () => {
    setIsFilterClicked(prev => !prev);
  };

  const movePage = pageNumber => {
    searchParams.set('page', (pageNumber - 1) * 3);
    setSearchParams(searchParams);
  };

  return (
    <main className="productList">
      <Banner onClickFilter={onClickFilter} />
      <div className="contentWrapper">
        <Aside
          isFilterClicked={isFilterClicked}
          products={products}
          CATEGORY_DATA={CATEGORY_DATA}
        />
        <div className="productWrapper">
          <Product products={products} isFilterClicked={isFilterClicked} />
        </div>
      </div>
      <div>
        <button onClick={() => movePage(1)}>1</button>
        <button onClick={() => movePage(2)}>2</button>
        <button onClick={() => movePage(3)}>3</button>
      </div>
    </main>
  );
};

export default ProductList;
