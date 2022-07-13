import React from 'react'
import {DeleteIcon} from "@chakra-ui/icons"
import { Box } from '@chakra-ui/react'

const TaskDeleteButton = (props) => {
  const {id, setTaskList, taskList} = props;
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => ( 
      task.id !== id
    )))
  }
  return (
    <Box cursor="pointer">
      <DeleteIcon onClick={() => handleDelete(id)}/>
    </Box>
  )
}
export default TaskDeleteButton;