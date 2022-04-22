export default function Hello() {
  function showName() {
    console.log("Mike");
  }
  function showAge(txt) {
    console.log(txt);
  }
  // function showText(e) {
  //   console.log(e.target.value);
  // }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button
        onClick={() => {
          showAge(10);
        }}
      >
        Show age
      </button>
      <input
        type="text"
        onChange={(e) => {
          const txt = e.target.value;
          showAge(txt);
          // console.log(e.target.value);
        }}
      />
    </div>
  ); //p태그는 리턴을 해줘야 오류가 안남
}
