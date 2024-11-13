import React, { useState, useRef } from 'react';
import TaskInteractButtons from './TaskInteractButtons';
import DelTaskAlert from './DelTaskAlert';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { connect } from 'react-redux';
import * as actions from './actions/tasksActions';

function TaskUnit({ index, moveCard, showAlert, title, bodyTask }) {
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.TASK,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [index],
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.TASK,
      hover(item, monitor) {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        const hoverBoundingRect = ref.current.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    }),
    [index, moveCard],
  );

  drag(drop(ref));

  const openDelMenu = () => {
    showAlert(<DelTaskAlert showAlert={showAlert} index={index}/>)
  };

  return (
    <div ref={ref}>
      <div className="task">
        <div className="task_text_area" onClick={() => setButtonsVisible(!buttonsVisible)}>
          <div className="head_text_stile">{title}</div>
          <p className="sub_text_stile">{bodyTask}</p>
        </div>
        <button id="delButton" className="del_button" onClick={openDelMenu}>X</button>
      </div>
      {buttonsVisible && <TaskInteractButtons showAlert={showAlert} index={index} />}
    </div>
  );
}

const mapDispatchToProps = {
  showAlert: actions.showAlert,
};

export default connect(null, mapDispatchToProps)(TaskUnit);