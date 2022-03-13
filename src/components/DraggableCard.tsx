import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface ICard {
  isDragging: boolean;
}

const Card = styled.div<ICard>`
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${(props) =>
    props.isDragging ? "tomato" : props.theme.cardColor};
  box-shadow: ${(props) => (props.isDragging ? "0px 2px 5px" : "none")};
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

function DraggableCard({ toDoText, toDoId, index }: IDraggableCardProps) {
  return (
    <Draggable index={index} draggableId={toDoId + ""}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          {...magic.dragHandleProps}
          ref={magic.innerRef}
          {...magic.draggableProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
