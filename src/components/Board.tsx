import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITrelloToDo, trelloToDoState } from "../atoms";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  padding: 10px 0px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.borderColor};
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: 600px;
  margin-bottom: 10px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "pink"
      : props.isDraggingFromThis
      ? "skyblue"
      : "#e6fdff"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

interface IForm {
  toDo: string;
}

const Form = styled.form`
  width: 100%;

  input {
    width: 100%;
  }
`;

interface IBoard {
  toDos: ITrelloToDo[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoard) {
  const setToDos = useSetRecoilState(trelloToDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();

  const onValid = (data: IForm) => {
    console.log("data ::: ", data);
    setValue("toDo", "");

    setToDos((oldToDos) => {
      return {
        ...oldToDos,
        [boardId]: [{ id: Date.now(), text: data.toDo }, ...oldToDos[boardId]],
      };
    });
  };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                index={index}
                key={toDo.id}
                toDoText={toDo.text}
                toDoId={toDo.id}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
