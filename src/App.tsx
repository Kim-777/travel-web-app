import React from "react";
import "./App.css";
import GlobalStyle from "./components/GlobalStyle";
import ToDoList from "./components/ToDoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { trelloToDoState } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(trelloToDoState);

  const onDragEnd = (info: DropResult) => {
    console.log("info :::: ", info);

    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source?.droppableId) {
      setToDos((allBoard) => {
        const boardCopy = [...allBoard[destination?.droppableId]];

        const [item] = boardCopy.splice(source.index, 1);
        // console.log("item :::: ", item);
        boardCopy.splice(destination.index, 0, item);

        return {
          ...allBoard,
          [destination.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source?.droppableId) {
      setToDos((allBoard) => {
        const destinationToDos = [...allBoard[destination?.droppableId]];
        const startToDos = [...allBoard[source?.droppableId]];

        // console.log("destinationToDos :::: ", destinationToDos);

        const [item] = startToDos.splice(source.index, 1);
        // console.log("item ::: ", item);
        destinationToDos.splice(destination.index, 0, item);

        return {
          ...allBoard,
          [source?.droppableId]: allBoard[source?.droppableId].filter(
            (_notUsed, index) => index !== source.index
          ),
          [destination.droppableId]: destinationToDos,
        };
      });
    }
  };
  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
