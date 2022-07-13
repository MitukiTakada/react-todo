import { Box, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import TaskAddInput from './TaskAddInput';
import TaskCardDeleteButton from './TaskCardDeleteButton';
import TaskCardTitle from './TaskCardTitle';
import Tasks from './Tasks';


const TaskCard = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [inputText, setInputText] = useState("")
  const {cardList, setCardList,id, index} = props;
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <Flex ml={10} >
          <Box bg="rgb(228,228,228)" w="sm" p={4} borderRadius="md" p="10px 25px" mb={5}>
            <Box display="flex" justifyContent="space-between" {...provided.dragHandleProps}>
              <TaskCardTitle clicked={clicked} setClicked={setClicked}/>
              <TaskCardDeleteButton cardList={cardList} setCardList={setCardList} id={id}/>
            </Box>
            <TaskAddInput 
            inputText={inputText} 
            setInputText={setInputText} 
            taskList={taskList} 
            setTaskList={setTaskList}/>
            <Tasks taskList={taskList} setTaskList={setTaskList}/>
          </Box>
        </Flex>
      </div>
      )}
    </Draggable>
  )
}

export default TaskCard
