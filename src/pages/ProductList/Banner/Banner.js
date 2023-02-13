import React, { useState } from 'react';
import './Banner.scss';

const Banner = ({ onClickFilter }) => {
  const [isUpClicked, setIsUpClicked] = useState(false);

  const onClickUp = () => {
    setIsUpClicked(prev => !prev);
  };

  return (
    <div className="banner">
      <h1 className="category">남성신발 ()</h1>
      <div className="functionWrapper">
        <div className="function" onClick={onClickFilter}>
          <span className="filter">필터 숨기기</span>
          <img className="bannerIcon" alt="Icon Img" src="/images/filter.png" />
        </div>
        <div className="function" onClick={onClickUp}>
          <span className="sort">정렬 기준: </span>
          <img
            className="bannerIcon"
            alt="Icon Img"
            src={isUpClicked === false ? '/images/down.png' : '/images/up.png'}
          />
          {isUpClicked === true && (
            <div className="sortListWrapper">
              <ul className="sortLists">
                <li className="sortList">추천순</li>
                <li className="sortList">최신순</li>
                <li className="sortList">높은 가격순</li>
                <li className="sortList">낮은 가격순</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
