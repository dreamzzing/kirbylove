import React, { useState } from 'react';
import '../styles/Coach.css';


function Coach() {
  // 팀 개수를 입력받아 관리할 상태
    const [teamCount, setTeamCount] = useState(12);
    const [regionLetter, setRegionLetter] = useState('a');
    const [classLetter, setClassLetter] = useState(1);

    // input 값 변경 시 실행되는 함수
    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        if (newValue > 15 || newValue < 0) {
            alert("이잉 장난치지마라용🩵");
            return;
            }
            setTeamCount(newValue);
        };

    // 지역 선택
    const handleRegionClick = (letter) => {
        setRegionLetter(letter);
        setClassLetter(1);
    };

    // 반 선택
    const handleClassClick = (num) => {
        setClassLetter(num);
    };

    // 버튼 클릭 시 페이지 이동
    const handlePageClick = (url) => {
        window.open(url, '_blank'); // 새 탭에서 열기
    };

    const classCount = regionLetter === 'a' ? 8 : 2;
    const classArray = Array.from({ length: classCount }, (_, i) => i + 1);
    
    return (
        <div className= "rabbitbackground">
            <div className="mainfont">
            <h2>코치님은 어디신가요오오,,,⭐</h2>

            <button
                onClick={() => handleRegionClick('a')}
                className={`teambutton ${regionLetter === 'a' ? 'selected' : ''}`}
            >
                서울
            </button>
            <button
                onClick={() => handleRegionClick('b')}
                className={`teambutton ${regionLetter === 'b' ? 'selected' : ''}`}
            >
                대전
            </button>
            <button
                onClick={() => handleRegionClick('c')}
                className={`teambutton ${regionLetter === 'c' ? 'selected' : ''}`}
            >
                광주
            </button>
            <button
                onClick={() => handleRegionClick('d')}
                className={`teambutton ${regionLetter === 'd' ? 'selected' : ''}`}
            >
                구미
            </button>
            <button
                onClick={() => handleRegionClick('e')}
                className={`teambutton ${regionLetter === 'e' ? 'selected' : ''}`}
            >
                부울경
            </button>

            <div className="class-button-group">
                {classArray.map((num) => (
                    <button
                    key={num}
                    onClick={() => handleClassClick(num)}
                    className={`teambutton ${classLetter === num ? 'selected' : ''}`}
                    >
                    {num}반
                    </button>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                총
                <input
                type="number"
                value={teamCount}
                onChange={handleChange}
                placeholder="팀 개수 입력"
                className="teamCountInput"
                />팀이신가요❤️
            </div>

            <div style={{ marginTop: '20px' }}>
                {Array.from({ length: teamCount }, (_, i) => {
                const teamNumber = classLetter * 100 + (i + 1);
                const url = `https://i12${regionLetter}${teamNumber}.p.ssafy.io`;
                return (
                    <button
                    key={i}
                    onClick={() => handlePageClick(url)}
                    className="pagebutton"
                    >
                    {regionLetter}{teamNumber}
                    </button>
                );
                })}
            </div>
            </div>
        </div>
    );
}

export default Coach;
