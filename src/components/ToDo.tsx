import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    // console.log("event ::: ", name);

    setToDos((oldToDos) => {
      // const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);

      return oldToDos.map((value) =>
        value.id === id ? { ...value, category: name } : value
      ) as IToDo[];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button onClick={handleClick} name={Categories.TO_DO}>
          TO_DO
        </button>
      )}
      {category !== Categories.DOING && (
        <button onClick={handleClick} name={Categories.DOING}>
          DOING
        </button>
      )}
      {category !== Categories.DONE && (
        <button onClick={handleClick} name={Categories.DONE}>
          DONE
        </button>
      )}
    </li>
  );
}

export default ToDo;
