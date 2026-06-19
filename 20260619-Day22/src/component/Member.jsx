// Member.jsx
// 중복되는 태그들을 새로운 태그로 만든다. 
function Member(){
    return(
      <div className="profile">
      <img src="https://marketplace.canva.com/6LEAM/MAG8_W6LEAM/1/tl/canva-cute-dinosaur-cartoon-character-with-stars-MAG8_W6LEAM.png" alt="" />
        <h2>dragon</h2>
        <p>full-stack</p>
        <p className="new-tag">New</p>

     </div>
    )
}
// 내가 만든 Member태그를 어디서든지 사용할 수 있도록 내보내기
// 하겠다. 
export default Member;