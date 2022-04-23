###useState

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
