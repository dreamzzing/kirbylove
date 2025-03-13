import axios from "axios";
import React, { useEffect, useState } from "react";
import kirbyGif from '../assets/kirby_walk.gif';
import "../styles/Home.css";

function Home({ goToCoach }) {
  const [message, setMessage] = useState("");
  const [heartEmoji, setHeartEmoji] = useState("🩷");
  const hearts = [
    "❤️", "🩷", "💗", "💖", "💜", "💙", "🧡", "💓",
    "💘", "💖", "💕", "💝", "💚", "🩵", "💛", "🤍", "❣️"
  ];

  // 서버 API 예시 호출
  useEffect(() => {
    axios.get("/api/hello")
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // 하트 클릭 시 랜덤 이모지 변경
  const handleHeartClick = () => {
    const randomIndex = Math.floor(Math.random() * hearts.length);
    setHeartEmoji(hearts[randomIndex]);
  };

  // 이미지 클릭 시 비밀번호 확인 → /coach 페이지로 이동
  const handleImageClick = () => {
    const inputPassword = prompt("열려라 커비?!");
    const correctPassword = "121212"; // 실제 비밀번호로 변경 가능

    if (inputPassword === correctPassword) {
      goToCoach();
      
    } else {
      alert("뉴규,,,세여...?");
    }
  };

  return (
    <div className="background">
      <div>
        <p>
          <span
            onClick={handleHeartClick}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            {heartEmoji} {message} {heartEmoji}
          </span>
          <p>하트를 눌러주세요</p>
        </p>
        <img
          src={kirbyGif}
          alt="Clickable"
          style={{ width: "200px", cursor: "pointer" }}
          onClick={handleImageClick}
        />
        ⬅️ 커비가 궁금하시다면?
      </div>
    </div>
  );
}

export default Home;
