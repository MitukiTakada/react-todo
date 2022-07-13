import { Input } from '@chakra-ui/react'
import React from 'react'
import { v4 as uuid } from 'uuid';

const TaskAddInput = (props) => {
  const { taskList, setTaskList, inputText, setInputText} = props;
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if(inputText=== "") {
        return;
    }
    setTaskList([
      ...taskList,
      {
        text: inputText,
        id: taskId,
        draggableId: `task-${taskId}`
      }
    ])
    setInputText("")
  }
  const handleInputChange = (e) => {
   setInputText(e.target.value)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
       <Input 
       mt={3}
       width="100%"
       padding="10px 15px"
       border="none"
       outline="none"
       borderRadius={3}
       placeholder='add a task'
       value={inputText}
       onChange={handleInputChange}
       />
      </form>
    </div>
  )
}

export default TaskAddInput
