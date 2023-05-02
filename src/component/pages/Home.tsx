import axios from "axios";
import React, { useEffect, useState } from "react";
import "../pages/Home.css";
import "../img/check.png";

interface DataItem {
  nickname: string;
  serviceImgUrl: string;
  serviceSubImgUrl: string;
  themeId: number; // console에 찍어주기 위해 추가
}

function Home(): JSX.Element {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    axios
      .get<{ results: DataItem[] }>("http://localhost:3001/data")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (themeId: number) => {
    console.log(themeId);
  };

  return (
    <div className="flex-container">
      <div className="page-container">
        {/* 동일한 키값을 한개로 공유해서 사진에서 계속 오류가 발생해서 수정해주었다 */}
        {/* <div>
          {data.map((item) => (
            <div key={item.nickname}>
              <p>{item.nickname}</p>
              <img src={item.serviceImgUrl} alt="item" />
            </div>
          ))}
        </div> */}
        {/*밑과 같이 수정후에는 오류가 발생하지 않았다.*/}
        {data.map((item, index) => (
          <div key={index} onClick={() => handleClick(item.themeId)}>
            <div className="main-box">
              <img className="main-img" src={item.serviceImgUrl} alt="item" />
              <div className="home-user-profile">
                <img
                  className="sub-img"
                  src={item.serviceSubImgUrl}
                  alt="item2"
                />
                <p className="home-nickname">{item.nickname}</p>
              </div>
              <div className="home-user-text">
                <p>#관찰을많이하는 #감수성이풍부한</p>
                <p>#신중한#감성적인</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
