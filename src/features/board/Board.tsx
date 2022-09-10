import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { DraggableProvided, DraggableStateSnapshot, DroppableProvided, DroppableStateSnapshot, DropResult } from "@hello-pangea/dnd";
import TaskCard from "./components/shared/TaskCard";
import BoardActions from "./components/BoardAction";
import styled from "@emotion/styled";
import { gettasks, reorder, move } from "./helpers/boardUtils";
import { BoardColumn } from "./helpers/types";


const TaskCardContainer = styled.div`
    margin: 8px;
 `

const ColumnContainer = styled.div`
  background: ${(props: { isDraggingOver: boolean }) => props.isDraggingOver ? "lightblue" : "lightgrey"};
  padding: 8px;
  width: 350px;
  margin: 5px;
  border-radius: 10px
  `



const Board = () => {
  const [state, setState] = useState<Array<BoardColumn>>([gettasks(3), gettasks(2, 3)]);

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const tasks = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = tasks;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter(group => group.length));
    }
  }

  const onTaskDelete = (columnIndex: number, taskIndexInColumn: number) => {
    const newState = [...state];
    newState[columnIndex].splice(taskIndexInColumn, 1);
    setState(
      newState.filter(group => group.length)
    );
  }

  const onAddNewTask = () => {

  }

  const onAddNewColumn = () => {

  }

  return (
    <React.Fragment>
      <BoardActions
        onAddNewColumn={onAddNewColumn}
        onAddNewTask={onAddNewTask}
      />


      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((boardColumn, columnIndex) => (
            <Droppable key={columnIndex} droppableId={`${columnIndex}`}>
              {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                <ColumnContainer
                  ref={provided.innerRef}
                  isDraggingOver={snapshot.isDraggingOver}
                  {...provided.droppableProps}
                >
                  {boardColumn.map((task, taskIndexInColumn) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={taskIndexInColumn}
                    >
                      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                        <TaskCardContainer ref={provided.innerRef}{...provided.draggableProps}

                          {...provided.dragHandleProps}>
                          <TaskCard
                            taskName={task.content} />
                        </TaskCardContainer>
                      )}

                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ColumnContainer>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </React.Fragment>
  );
}

export default Board
