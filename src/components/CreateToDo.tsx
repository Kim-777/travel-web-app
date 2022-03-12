import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, IToDo, toDoState } from "../atoms";

interface IFormData {
  todo: string;
  extraError?: string;
}

function CreateToDo() {
  const setTodos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormData>();

  const onValid = (data: IFormData) => {
    // console.log("data ::: ", data);
    setTodos((oldToDos) => [
      { text: data.todo, id: Date.now(), category } as IToDo,
      ...oldToDos,
    ]);
    setValue("todo", "");
    // setError("extraError", { message: "Server 에러..." });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit(onValid)}
    >
      <input
        {...register("todo", {
          required: "Please write a todo",
        })}
        placeholder="할 일을 입력해주세요"
      />
      <span>{errors?.todo?.message}</span>
      <button>추가</button>
      <span>{errors?.extraError?.message}</span>
    </form>
  );
}

export default CreateToDo;
