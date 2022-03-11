import React from "react";
import { useForm } from "react-hook-form";

interface IFormData {
  email: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

export default function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>();

  const onValid = (data: IFormData) => {
    if (data.password !== data.password1) {
      return setError(
        "password1",
        {
          message: "패스워드가 다릅니다.",
        },
        {
          shouldFocus: true,
        }
      );
    }
    setError("extraError", { message: "Server 에러..." });
  };

  console.log("formState.errors :: ", errors);

  // console.log(watch());
  // const [toDo, setToDo] = React.useState("");

  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   setToDo(event.currentTarget.value);
  // };

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 30px",
        }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "emial is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "naver 이메일만 허용됩니다.",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("username", {
            required: "이름을 입력해주세요",
            minLength: {
              value: 2,
              message: "이름은 2글자 이상 입력해야 합니다.",
            },
          })}
          placeholder="username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "패스워드를 입력해주세요",
            minLength: {
              value: 5,
              message: "패스워드를 5글자 이상 입력해주세요",
            },
          })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "5글자 이상 입력해주세요",
            minLength: 5,
          })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>추가</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}
