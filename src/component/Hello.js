import { useState } from "react";

export default function Hello() {
  // let name = "Mike";
  const [name, setName] = useState("Mike"); //useState 배열 반환
  // function changeName() {
  // const newName = name === "Mike" ? "Jane" : "Mike";
  // console.log(name);
  // document.getElementById("name").innerText = name;
  // setName(name === "Mike" ? "Jane" : "Mike");
  // }
  return (
    <div>
      <h2 id="name">{name}</h2>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        Change
      </button>
    </div>
  );
}
