import { Box } from '@chakra-ui/react'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import TaskDeleteButton from './TaskDeleteButton';

const Task = (props) => {
  const {text, id, setTaskList, taskList, draggableId, index} = props;
  return (
    <div>
      <Draggable index={index} draggableId={draggableId}>
        {(provided => (
          <div key={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Box display="flex" p={3} justifyContent="space-between" alignItems="center" mt={2} bgColor="white" boxShadow="1px 1px 1px 1px rgb(75,75,75)" borderRadius={8}>
            <Box ml="12px">
              {text}
            </Box>
            <TaskDeleteButton id={id} setTaskList={setTaskList} taskList={taskList}/>
            </Box>
          </div>
        ))}
      </Draggable>
    </div>
  )
}

export default Task
