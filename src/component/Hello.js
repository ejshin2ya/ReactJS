// const Hello = function () {
//   <p>Hello</p>;
// };
//화살표 함수
// const Hello = () => {
//   <p>Hello</p>;
// };

import styles from "./Hello.module.css";
export default function Hello() {
  return (
    <div>
      <h1
        style={{
          color: "#f00",
          borderRight: "2px solid #000",
          marginBottom: "50px",
          opacity: 0.5,
        }}
      >
        Hello
      </h1>
      <div className={styles.box}>Hello</div>
    </div>
  ); //p태그는 리턴을 해줘야 오류가 안남
}
