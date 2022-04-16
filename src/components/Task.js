import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FaExclamationTriangle, FaExpandAlt } from 'react-icons/fa';

export const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <div className='task-card'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <div className='task-card-header'>
            <div className='kb-tooltip'>
              <FaExclamationTriangle />
              <div className="kb-tooltip__content">
                Urgente
              </div>
            </div>
          </div>
          <div className='task-details-container'>
            <div className='task-details-title'>{props.task.content}</div>
            <div className='task-details'>
              Protótipo inicial do Kanbang no Figma para se ter uma ideia das funcionalidades que teremos nele e suas possibilidades.
            </div>
          </div>
          <div className='comments-container'>
              <FaExpandAlt />
          </div>
        </div>
      )}
    </Draggable>
  );
};
