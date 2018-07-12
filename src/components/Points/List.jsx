import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import _connect from "../../redux/connect";

const CloseButton = props => {
  const title = "Удалить точку";
  return (
    <button
      type="button"
      className="sortable-list__delete-button"
      aria-label={title}
      title={title}
      onClick={props.onClick}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  );
};

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey"
});

const mapStateToProps = state => {
  const props = {
    points: state.points
  };
  return props;
};

class List extends React.Component {
  onDragEnd = () => result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reoderedPoints = reorder(
      this.props.points,
      result.source.index,
      result.destination.index
    );

    this.props.reoderPoints(reoderedPoints);
  };

  deletePoint = id => () => {
    this.props.deletePoint(id);
  };

  render() {
    const points = this.props.points;
    return (
      <DragDropContext onDragEnd={this.onDragEnd()}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              id="list"
              className="sortable-list"
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {points.map((point, index) => (
                <Draggable key={point.id} draggableId={point.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      id={`point_${point.id}`}
                      className="sortable-list__item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <span className="sortable-list__item-text">
                        {point.name}
                      </span>
                      <CloseButton onClick={this.deletePoint(point.id)} />
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

export default _connect(mapStateToProps)(List);
