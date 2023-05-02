import axios from "axios";
import React, { useEffect, useState } from "react";
import "../pages/Home.css";
import "../img/check.png";

interface DataItem {
  nickname: string;
  serviceImgUrl: string;
  serviceSubImgUrl: string;
  themeId: number;
}

function Chei(): JSX.Element {
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
  // 처음에는 find를 해서 한건만 불러오게 되었다.
  // 그 후 data.filter를 이용해 전부를 불러올 수 있었다.
  const cheiData = data.filter((item) => item.nickname === "채이");

  return (
    <div className="flex-container">
      <div className="page-container ">
        {cheiData.map((item) => (
          <div key={item.themeId} onClick={() => handleClick(item.themeId)}>
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

export default Chei;
