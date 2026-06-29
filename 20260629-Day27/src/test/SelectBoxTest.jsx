// SelectBoxTest.jsx
// SelectBoxTest.jsx 파일 생성후 기본설정해줘
import React, { useState } from "react";

// 리액트 -> 자바스크립트 안에 HTML이 들어갔다!
//  불필요한 코드들 없애려고!
export default function SelectBoxTest() {
  // select 버튼
  //  - 여러개의 항목중에 하나를 선택하는 태그!
  let [과일, set과일] = useState("");
  return (
    <div>
      <h2>드롭다운 메뉴 selectBox</h2>
      <h3>음식 선택</h3>
      {/* 아래 select처럼 만들기 피자,치킨,햄버거 */}

      <h3>선택한 음식: </h3>

      <br />
      <br />
      <br />
      <hr />
      <h3>과일 선택</h3>
      <select
        onChange={(이벤트정보) => {
          set과일(이벤트정보.target.value);
        }}
      >
        <option value="">선택하세요</option>
        <option value="사과">🍎</option>
        <option value="포도">🍇</option>
      </select>

      <h3>내가 선택한 과일: {과일}</h3>
    </div>
  );
}