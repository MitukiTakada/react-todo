import { Box, MenuDivider } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { DragDropContext } from 'react-beautiful-dnd'
import AddTaskCardButton from './AddTaskCardButton'
import TaskCard from './TaskCard'

const TaskCards = () => {
  const [cardList, setCardList] = useState([{
    id: "1",
    draggableId: "card-1"
  }])
  const dragCards = (result) => {
    const remove = cardList.splice(result.source.index, 1);
    cardList.splice(result.destination.index, 0, remove[0])
  }
  const [title, setTitle ] = useState("")
  return (
    <DragDropContext onDragEnd={dragCards}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Box display="flex" pt={10} justifyContent="flex-start" alignItems="flex-center" flexWrap="wrap">
            {cardList.map((card, index) => (
              <div key={card.id}>
                <TaskCard title={title} setTitle={setTitle} cardList={cardList} setCardList={setCardList} id={card.id} index={index}/>
              </div>
            ))}
            {provided.placeholder}
            <AddTaskCardButton cardList={cardList} setCardList={setCardList}/>
            </Box>
        </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TaskCards
