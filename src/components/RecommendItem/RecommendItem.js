import React, { useEffect, useState } from 'react';
import './RecommendItem.scss';

function RecommendItem() {
  const [recommendItem, setRecommendItem] = useState([]);

  const [showStartIdx, setshowStartIdx] = useState(0);

  const numOfShownCard = 3;
  const checkLeftBtnActive = () => showStartIdx > 0;
  const checkRightBtnActive = () =>
    showStartIdx < recommendItem.length - numOfShownCard;

  const onClickLeftBtn = () => {
    if (checkLeftBtnActive()) {
      setshowStartIdx(showStartIdx - 1);
    }
  };

  const onClickRightBtn = () => {
    if (checkRightBtnActive()) {
      setshowStartIdx(showStartIdx + 1);
    }
  };

  useEffect(() => {
    fetch('/data/shoesData.json')
      .then(res => res.json())
      .then(data => setRecommendItem(data));
  }, []);

  return (
    <div className="recommendItem">
      <div className="titleWrapper">
        <div className="sliderName">Recommend Items</div>
        <div className="buttonWrapper">
          <img
            className="leftArrow"
            src="../../images/왼쪽화살표.jpg"
            alt="왼쪽 화살표"
            onClick={onClickLeftBtn}
            disabled={!checkLeftBtnActive()}
          />
          <img
            className="rightArrow"
            src="../../images/오른쪽화살표.png"
            alt="오른쪽 화살표"
            onClick={onClickRightBtn}
            disabled={!checkRightBtnActive()}
          />
        </div>
      </div>
      <div className="imageWrapper">
        <div
          className="imageMover"
          style={{ transform: `translateX(-${showStartIdx * (100 / 9)}%)` }}
        >
          {recommendItem.map(imgUrl => {
            return (
              <div key={imgUrl.id} className="itemImage">
                <img
                  className="shoesImg"
                  src={imgUrl.shoesImg}
                  alt="{imgUrl.shoesName}"
                />
                <div className="shoesInfo">
                  <div className="shoesName">{imgUrl.shoesName}</div>
                  <div className="price">{imgUrl.price} 원</div>
                </div>
                <div className="category">{imgUrl.category}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RecommendItem;
