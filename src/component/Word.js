import { useState } from "react";

export default function Word({ word: w }) {
  //props로 넘어온 word를 새로운 변수명 w로 할당
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }
  function toggleDone() {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word, //기존 데이터에 isDone 내용만 바꿔서 보내줌
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE", //삭제는 정보를 넘겨줄 필요가 없기 때문에 여기까지만 작성
      }).then((res) => {
        //삭제만 하면 새로운 화면을 그려주지 않고 이전 화면을 보여준다.
        setWord({ id: 0 });
      });
    }
  }
  if (word.id === 0) {
    return null;
  }
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button onClick={del} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}

/**
 * Rest API
 *
 * Create :POST
 * Read : GET
 * Update : PUT
 * Delete : DELETE
 */
