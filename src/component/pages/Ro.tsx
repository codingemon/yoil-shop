import axios from "axios";
import React, { useEffect, useState } from "react";
import "../pages/Home.css";

interface DataItem {
  nickname: string;
  serviceImgUrl: string;
  serviceSubImgUrl: string;
  themeId: number;
}

function Ro(): JSX.Element {
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

  const cheiData = data.filter((item) => item.nickname === "로블리");

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

export default Ro;
