import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import Task from './Task';

const Tasks = (props) => {
  const {taskList, setTaskList} = props;
  const handleDragEnd = (result) => {
    const remove = taskList.splice(result.source.index, 1);
    taskList.splice(result.destination.index, 0, remove[0]);
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} >
              {taskList.map((task, index) => (
                <Task  
                index={index}
                key={task.id}
                text={task.text} 
                id={task.id} 
                draggableId={task.draggableId}
                setTaskList={setTaskList} 
                taskList={taskList}/>
                ))}
                {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks
