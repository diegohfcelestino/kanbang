import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { IconUrgent, IconExpand } from "../../services/icons";

export const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <div
          className="task-card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="task-card-header">
            <div className="kb-tooltip">
              <IconUrgent />
              <div className="kb-tooltip__content">Urgente</div>
            </div>
          </div>
          <div className="task-container">
            <div className="task-title">{props.task.title}</div>
            <div className="task-details">{props.task.content}</div>
          </div>
          <div className="comments-container">
            <div className="kb-tooltip">
              <IconExpand />
              <div className="kb-tooltip__comments">Abrir</div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
