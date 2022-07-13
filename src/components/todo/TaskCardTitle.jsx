import { Input } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react'

const TaskCardTitle = (props) => {
  const {clicked, setClicked} = props;
  const [inputTitle, setInputTitle] = useState("today");
  const handleClick = () => {
    setClicked(true)
  }
  const handleInputChange = (e) => {
    setInputTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(false)
  }
  const handleBlur = () => {
    setClicked(false)
  }
  return (
    <div onClick={handleClick} className='taskCardInputArea'>
      {clicked ? (
        <form onSubmit={handleSubmit}>
          <Input 
          w="100%"
          fontSize="sm"
          borderRadius={8}
          border="none"
          padding= "4px 6px"
          outline="none"
          autoFocus
          value={inputTitle} 
          onChange={handleInputChange} 
          maxLength={10}
          onBlur={handleBlur}/>
        </form>
      ): (
        <h3>{inputTitle}</h3>
      )}
    </div>
  )
}

export default TaskCardTitle
