import React, { useState, useRef } from "react";
import TaskInteractButtons from "./TaskInteractButtons";
import DelTaskAlert from "./DelTaskAlert";
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

export default function TaskUnit({index, moveCard, showAlert, title, body}) {    
    let showKey = false;
    const [interactButtons, showInteractButtons] = useState();
    const ref = useRef(null)

    const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.TASK,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }), [index])
  
    const [, drop] = useDrop(() => ({
      accept: ItemTypes.TASK,
      hover(item, monitor) {
        if (!ref.current) {
          return
        }
        const dragIndex = item.index
        const hoverIndex = index
  
        if (dragIndex === hoverIndex) {
          return
        }
  
        const hoverBoundingRect = ref.current.getBoundingClientRect()
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const clientOffset = monitor.getClientOffset()
        const hoverClientY = clientOffset.y - hoverBoundingRect.top
  
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }
  
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }
  
        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    }), [index, moveCard])
  
    drag(drop(ref))

    return (
        <div ref={ref}>
            <div className='task'>
                <div className='task_text_area' onClick={showButtons}>
                    <div className='head_text_stile'>{title}</div>
                    <p className='sub_text_stile'>{body}</p>
                </div>
                <button id='delButton' className='del_button' onClick={openDelMenu}>X</button>
            </div>
            {interactButtons}
        </div>
    )

    function openDelMenu() {
        showAlert(<DelTaskAlert showAlert={showAlert} index={index}/>)
    }

    function showButtons() {
        if(showKey){
            showKey = true;
            showInteractButtons();
        } else {
            showKey = false;
            showInteractButtons(<TaskInteractButtons showAlert={showAlert} index={index}/>);
        }
    }
}