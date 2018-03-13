import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  borderRadius: "0.5em",
  border: "0.1em solid white",
  background: isDragging ? "lightgreen" : "transparent",

  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "transparent",
  padding: grid,
  width: 250
});

const Favorite = styled.div`
  font-size: 1.2em;
  color: white;
  display: flex;
  justify-content: space-between;
`;

class Favorites extends React.Component {
  onClick = id => {
    const { removeFromFavorites } = this.props;
    removeFromFavorites(id);
  };

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const { reorderFavorites } = this.props;
    reorderFavorites(result.source.index, result.destination.index);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.props.favorites.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Favorite>
                          <span>{item.name}</span>
                          <span>{item.main.temp}&#8451;</span>
                          <button onClick={() => this.onClick(item.id)}>
                            X
                          </button>
                        </Favorite>
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  const favorites = state.favorites.list;
  return {
    favorites
  };
};

Favorites = connect(mapStateToProps, actions)(Favorites);

export default Favorites;
