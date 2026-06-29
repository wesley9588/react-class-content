import React from "react";
import Feed from "./component/Feed";
import Card from "./component/Card";
//ProductPage.jsx

export default function ProductPage() {
  return (
    <div>
      <h2>오늘의 추천 상품</h2>

      <Card 
      path="https://via.placeholder.com/150" alt=""/>  
      
      <Card 
      path="https://via.placeholder.com/150" alt=""/>
      
      <Card 
      path="https://via.placeholder.com/150" alt=""/>

     
    </div>
  );
}