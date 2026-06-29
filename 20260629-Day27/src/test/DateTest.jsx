import { useState } from "react";

function DateTest() {
  const today = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <div>
      <h2>DateTest</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <h3>선택한 날짜: {selectedDate}</h3>
    </div>
  );
}

export default DateTest;
