## 7. useState

- 동일한 컴포넌트를 사용자 인터랙션에 따라 바뀌어야 할 때 구현을 도와주는 react hooks 중 하나이다.
- 리액트 16.8 이후부터 Hooks라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었다.
- useState는 배열값으로 반환해주는 특징을 가지고 있으며 import해서 사용해야 합니다.
- 아래예시는 화살표 함수 및 배열 구조분해를 사용하여 useState 함수 호출 시 동적으로 상태 관리가 가능하게 해주었습니다.

```
import { useState } from "react";

export default function Hello() {
  const [name, setName] = useState("Mike"); //useState 배열 반환
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
```

## 8. props(properties의 줄임말)

- state와 props은 많이 사용된다.
- 컴포넌트에 있는 state를 props로도 사용가능하다.
- props는 부모 컴포넌트가 자식 컴포넌트에게 값을 전달할때 사용하는 읽기전용 데이터이다.
- 프로퍼티는 수정할 수 없다는 특징이 있다.

## 8-1. state와 props의 활용

- 각 컴포넌트마다 name의 값이 바뀌며(state),
- 전달된 name이 UserName.js 자식 컴포넌트에서 활용되어 hello, Mike에 이름이 전달되어 name 데이터가 함께 변화되는 모습을 볼 수 있다.(props)

```
#App.js
import "./App.css";
import Hello from "./component/Hello";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h3>props : properties</h3>
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App;
```

![](2022-04-23-12-56-59.png)

```
# Hello.js
import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {
  // let name = "Mike";
  const [name, setName] = useState("Mike"); //useState 배열 반환
  // const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인 입니다" : "미성년자 입니다.";

  return (
    <div>
      <h2 id="name">
        {name}({age}) : {msg}
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
          // setAge(age + 1);
        }}
      >
        Change
      </button>
    </div>
  );
}
```

```
#UserName.js
export default function UserName({ name }) {
  return <p>Hello,{name}</p>;
}
```

## 9. map() 반복문 함수와 dummy 데이터 구현

- 더미 데이터를 만들기 위해 json 생성

```
{
  "days": [
    { "id": 1, "day": 1 },
    { "id": 2, "day": 2 },
    { "id": 3, "day": 3 }
  ],
  "words": [
    {
      "id": 1,
      "day": 1,
      "eng": "book",
      "kor": "책",
      "idDone": false
    },
    {
      "id": 2,
      "day": 1,
      "eng": "apple",
      "kor": "사과",
      "idDone": false
    },
    {
      "id": 3,
      "day": 2,
      "eng": "car",
      "kor": "자동차",
      "idDone": false
    },
    {
      "id": 4,
      "day": 2,
      "eng": "pen",
      "kor": "펜",
      "idDone": false
    },
    {
      "id": 5,
      "day": 3,
      "eng": "school",
      "kor": "학교",
      "idDone": false
    },
    {
      "id": 6,
      "day": 3,
      "eng": "pencil",
      "kor": "연필",
      "idDone": false
    }
  ]
}
```

- map() 함수는 각 배열의 요소를 돌면서 인자로 전달된 함수를 사용하여 처리된 새로운 결과를 새로운 배열에 담아 반환하는 함수이다.
- 아래는 map()함수를 통해 dummy에서 days에 해당하는 요소들을 day라는 새로운 배열에 담아냈다.

```
import dummy from "../db/data.json";

export default function DayList() {
  console.log(dummy);
  return (
    <ul className="list_day">
      {dummy.days.map((day) => (
        <li key={day.id}>Day {day.day}</li>
      ))}
    </ul>
  );
}
```

- filter() 함수: 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
- filter() 함수를 통해 day가 1인 조건에 해당하는 배열을 const wordList에 담아낸다.
- wordList 배열을 map() 반복문 함수를 이용하여 테이블 형태로 한줄씩 출력한다.

```
import dummy from "../db/data.json";
export default function Day() {
  //dummy.words
  const day = 1;
  const wordList = dummy.words.filter((word) => word.day === day);
  console.log(wordList);
  return (
    <>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
```

![](2022-04-23-23-09-48.png)
