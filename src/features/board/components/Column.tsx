import React, { Component } from "react";
import styled from "@emotion/styled";
import { Draggable } from "@hello-pangea/dnd";

let grid = '8px'

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`;

// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-top-left-radius: ${borderRadius}px;
//   border-top-right-radius: ${borderRadius}px;
//   background-color: ${({ isDragging }) =>
//     isDragging ? colors.G50 : colors.N30};
//   transition: background-color 0.2s ease;
//   &:hover {
//     background-color: ${colors.G50};
//   }
// `;

interface ColumnProps {
  title: string,
  quotes: string,
  index: number
}

const Column = ({ title, quotes, index }: ColumnProps) => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          {/* <Header isDragging={snapshot.isDragging}>
              <Title
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
              >
                {title}
              </Title>
            </Header>
            <QuoteList
              listId={title}
              listType="QUOTE"
              style={{
                backgroundColor: snapshot.isDragging ? colors.G50 : null
              }}
              quotes={quotes}
              internalScroll={this.props.isScrollable}
              isCombineEnabled={Boolean(this.props.isCombineEnabled)}
            /> */}
        </Container>
      )}
    </Draggable>
  );
}

export default Column
