import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((current) => current + 1);
  // 함수가 작동할 때, 인자로 event 를 받음
  // event 를 발생시킨 input 에서 value 를 받음
  // 그 value 를 'keyword' state 에 넣어줌
  const onChange = (event) =>
    setKeyword(event.target.value);

  console.log("Run all the time");

  // 한번만 실행되는 코드
  useEffect(() => {
    console.log("한번만 동작하는 Code");
  }, []);
  // 'keyword' 가 변화할 때마다 코드를 실행
  // 추가 조건 : 'keyword' 가 빈 칸이 아니고 길이가 5보다 길 때
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  // 'counter' 가 변화할 때마다 코드를 실행
  useEffect(() => {
    if (counter > 0) {
      console.log("Run when 'counter' changes");
    }
  }, [counter]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Here.."
        value={keyword}
        // event listener 연결
        onChange={onChange}
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
